const megoldva = new URLSearchParams(location.search).get("megoldva");
if (megoldva) {
  try { localStorage.setItem("aranyfust-" + megoldva, "teljesitve"); } catch (e) {} // hiba esetén elnyeljük, bízunk benne hogy jó lesz
}

function masodikUgyFeloldasa() {
  let teljesitve = megoldva === "ugy1";
  try {
    if (localStorage.getItem("aranyfust-ugy1") === "teljesitve") teljesitve = true;
  } catch (e) {}

  if (teljesitve) {
    const kartya = document.getElementById("case-2");
    if (kartya) kartya.classList.remove("is-locked");
  }
}

masodikUgyFeloldasa();
window.addEventListener("pageshow", masodikUgyFeloldasa); // a böngésző Vissza gombjával visszatérve is
window.addEventListener("focus", masodikUgyFeloldasa);    // ha a főoldal egy másik fülön végig nyitva volt
window.addEventListener("storage", masodikUgyFeloldasa);  // ha egy másik fülön lett meg az 1. ügy
