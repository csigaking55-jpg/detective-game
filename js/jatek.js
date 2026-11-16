(function () {
  const $ = (id) => document.getElementById(id);
  const ugy = UGY;
 
  const korNevek = ["1. kör", "2. kör", "3. kör"];
  const fazisok = ["phase-interrogation", "phase-evidence", "phase-verdict"];
 
  let aktualisKor = -1;      // -1 = még nem indult, 0–2 = körök, 3 = vége
  let hatralevo = 0;         // másodperc
  let idozito = null;
  let bizonyitekValaszok = {};
 
  // Ha valamelyik form hiányzik, szóljon a konzolban
  ["evidence-form", "verdict-form"].forEach(function (id) {
    if (!$(id)) console.error("Hiányzik a #" + id + " – másold be a formot az ügyoldalba!");
  });
 
  // ---------- Indítás ----------
  $("start-game").addEventListener("click", function () {
    this.disabled = true;
    $("game").hidden = false;
    $("game-hud").hidden = false;
    kihallgatasFeltoltese();
    korInditasa(0);
  });
 
  function korInditasa(n) {
    aktualisKor = n;
    fazisok.forEach(function (id, i) { $(id).hidden = i !== n; });
    $("timer-phase").textContent = korNevek[n];
    idozitoInditasa(ugy.idok[n] * 60);
    $(fazisok[n]).scrollIntoView({ behavior: "smooth", block: "start" });
  }
 
  // ---------- Időzítő ----------
  function idozitoInditasa(masodperc) {
    clearInterval(idozito);
    hatralevo = masodperc;
    idoKiirasa();
    idozito = setInterval(function () {
      hatralevo--;
      idoKiirasa();
      if (hatralevo <= 0) {
        clearInterval(idozito);
        lejartAzIdo();
      }
    }, 1000);
  }
 
  function idoKiirasa() {
    const perc = Math.floor(hatralevo / 60);
    const mp = hatralevo % 60;
    $("timer-value").textContent = String(perc).padStart(2, "0") + ":" + String(mp).padStart(2, "0");
    $("timer").classList.toggle("is-danger", hatralevo <= 60);
  }
 
  function lejartAzIdo() {
    if (aktualisKor === 0) korInditasa(1);
    else if (aktualisKor === 1) bizonyitekokBekuldese(true);
    else if (aktualisKor === 2) dontesBekuldese(true);
  }
 
  // ---------- 1. kör: kihallgatás ----------
  function kihallgatasFeltoltese() {
    const lista = $("suspect-picker");
    lista.innerHTML = "";
 
    ugy.gyanusitottak.forEach(function (gy) {
      const li = document.createElement("li");
      const gomb = document.createElement("button");
      gomb.type = "button";
      gomb.textContent = gy.nev;
      gomb.addEventListener("click", function () {
        lista.querySelectorAll("button").forEach(function (b) { b.classList.remove("is-active"); });
        gomb.classList.add("is-active");
        vallomasMutatasa(gy);
      });
      li.appendChild(gomb);
      lista.appendChild(li);
    });
 
    $("transcript").innerHTML = '<p class="game-phase-hint">Válassz ki egy gyanúsítottat a listából.</p>';
 
    // "Kihallgatás befejezése" gomb, hogy ne kelljen kivárni a 15 percet
    const sav = document.createElement("div");
    sav.className = "phase-actions";
    const tovabb = document.createElement("button");
    tovabb.type = "button";
    tovabb.className = "btn btn--ink";
    tovabb.textContent = "Kihallgatás befejezése";
    tovabb.addEventListener("click", function () { korInditasa(1); });
    sav.appendChild(tovabb);
    $("phase-interrogation").appendChild(sav);
  }
 
  function vallomasMutatasa(gy) {
    const doboz = $("transcript");
    doboz.innerHTML = "";
    gy.vallomas.forEach(function (sor) {
      const p = document.createElement("p");
      p.className = "transcript-line";
      const ki = document.createElement("span");
      ki.className = "transcript-speaker";
      ki.textContent = sor[0] + ": ";
      p.appendChild(ki);
      p.appendChild(document.createTextNode(sor[1]));
      doboz.appendChild(p);
    });
    // telefonon a szöveg a lista alatt van, ezért odagörget
    if (window.innerWidth <= 700) doboz.scrollIntoView({ behavior: "smooth", block: "start" });
  }
 
  // ---------- 2. kör: bizonyítékok ----------
  $("evidence-form").addEventListener("submit", function (e) {
    e.preventDefault();
    bizonyitekokBekuldese(false);
  });
 
  function bizonyitekokBekuldese(lejart) {
    if (aktualisKor !== 1) return;
    const adatok = new FormData($("evidence-form"));
    const kulcsok = Object.keys(ugy.bizonyitekok);
 
    if (!lejart) {
      const ures = kulcsok.filter(function (k) { return !adatok.get(k); }).length;
      if (ures > 0 && !confirm(ures + " bizonyítékot nem rendeltél senkihez. Biztosan továbblépsz?")) return;
    }
 
    bizonyitekValaszok = {};
    kulcsok.forEach(function (k) { bizonyitekValaszok[k] = adatok.get(k) || ""; });
 
    tablaFeltoltese();
    $("open-board").disabled = false;
    korInditasa(2);
  }
 
  // ---------- Bizonyítéktábla ----------
  function tablaFeltoltese() {
    const racs = $("board-grid");
    racs.innerHTML = "";
 
    ugy.gyanusitottak.forEach(function (gy) {
      const cetli = document.createElement("div");
      cetli.className = "board-note";
      const cim = document.createElement("h4");
      cim.textContent = gy.nev;
      const ul = document.createElement("ul");
 
      for (const kulcs in bizonyitekValaszok) {
        if (bizonyitekValaszok[kulcs] === String(gy.id)) {
          const li = document.createElement("li");
          li.textContent = bizonyitekNeve(kulcs);
          ul.appendChild(li);
        }
      }
      if (ul.children.length === 0) {
        const li = document.createElement("li");
        li.textContent = "nincs bizonyíték";
        ul.appendChild(li);
      }
 
      cetli.appendChild(cim);
      cetli.appendChild(ul);
      racs.appendChild(cetli);
    });
  }
 
  // A bizonyíték nevét a formból olvassa ki, így nem kell kétszer leírni
  function bizonyitekNeve(kulcs) {
    const mezo = $("evidence-form").querySelector('[name="' + kulcs + '"]');
    return mezo.closest(".evidence-item").querySelector(".evidence-item-name").textContent;
  }
 
  $("open-board").addEventListener("click", function () { $("board-modal").showModal(); });
  $("close-board").addEventListener("click", function () { $("board-modal").close(); });
 
  // ---------- 3. kör: végső döntés ----------
  $("verdict-form").addEventListener("submit", function (e) {
    e.preventDefault();
    dontesBekuldese(false);
  });
 
  function dontesBekuldese(lejart) {
    if (aktualisKor !== 2) return;
    const adatok = new FormData($("verdict-form"));
    const kerdesek = Object.keys(ugy.kerdesek);
 
    if (!lejart) {
      const ures = kerdesek.filter(function (k) { return !adatok.get(k); }).length;
      if (ures > 0 && !confirm(ures + " kérdésre nem válaszoltál. Biztosan beküldöd?")) return;
    }
 
    const joValasz = kerdesek.filter(function (k) { return adatok.get(k) === ugy.kerdesek[k]; }).length;
    const szazalek = Math.round(joValasz / kerdesek.length * 100);
 
    const bizKulcsok = Object.keys(ugy.bizonyitekok);
    const joBiz = bizKulcsok.filter(function (k) {
      return bizonyitekValaszok[k] === String(ugy.bizonyitekok[k]);
    }).length;
 
    eredmenyMutatasa(szazalek, joValasz, kerdesek.length, joBiz, bizKulcsok.length);
  }
 
  // ---------- Értékelés ----------
  function eredmenyMutatasa(szazalek, jo, osszes, joBiz, osszesBiz) {
    clearInterval(idozito);
    aktualisKor = 3;
    fazisok.forEach(function (id) { $(id).hidden = true; });
    $("timer-phase").textContent = "Vége";
 
    const eredmeny = $("phase-result");
    eredmeny.hidden = false;
    $("result-score").textContent = szazalek + "%";
 
    const reszlet = document.createElement("p");
    reszlet.className = "game-phase-hint";
    reszlet.textContent = "Helyes válaszok: " + jo + " / " + osszes +
      " · Jól párosított bizonyítékok: " + joBiz + " / " + osszesBiz;
    $("result-score").after(reszlet);
 
    const sikeres = szazalek >= ugy.kuszob;
    eredmeny.classList.add(sikeres ? "is-pass" : "is-fail");
    $("result-stamp").textContent = sikeres ? "Ügy megoldva" : "Ügy lezáratlan";
 
    if (sikeres) {
      try { localStorage.setItem("aranyfust-" + ugy.azonosito, "teljesitve"); } catch (e) {}
      // a főoldalra mutató linkek is viszik az eredményt (ha a böngésző nem osztja meg a mentést)
      document.querySelectorAll('a[href="index.html"]').forEach(function (a) {
        a.href = "index.html?megoldva=" + ugy.azonosito;
      });
      if ($("next-case")) $("next-case").hidden = false;
    } else {
      const ujra = document.createElement("button");
      ujra.type = "button";
      ujra.className = "btn btn--ink";
      ujra.textContent = "Újrapróbálom";
      ujra.addEventListener("click", function () { location.reload(); });
      eredmeny.querySelector(".phase-actions").appendChild(ujra);
    }
 
    eredmeny.scrollIntoView({ behavior: "smooth", block: "start" });
  }
})();
