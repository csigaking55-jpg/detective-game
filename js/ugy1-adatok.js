// 1. ügy – Halál az éjszakai expresszen 

const UGY = {
  azonosito: "ugy1",
  idok: [15, 10, 5],   // percek: 1. kör, 2. kör, 3. kör
  kuszob: 60,          // ennyi % kell a sikerhez

  gyanusitottak: [
    {
      id: 1,
      nev: "Kertész Lili",
      vallomas: [
        ["Nyomozó", "Mikor látta utoljára a nagybátyját?"],
        ["Lili", "Vacsoránál, háromnegyed tizenegy körül. Összevesztünk, ezt úgyis megtudják."],
        ["Nyomozó", "Min vesztek össze?"],
        ["Lili", "Pénzen. Nyolcezer pengővel tartozom a banknak, és megkértem, hogy segítsen. Azt mondta, előbb tanuljak meg bánni a pénzzel."],
        ["Nyomozó", "Ön az egyetlen örököse. Ez elég jó indíték."],
        ["Lili", "Tudom, hogy rosszul hangzik. De a végrendeletet hónapokig tárgyalnák, a bank addig nem várna. Holtan semmit nem ér nekem."],
        ["Nyomozó", "Mi történt a vita után?"],
        ["Lili", "Elővette a jegyzetfüzetét, és írt bele valamit. Közben végig Margitot nézte, nem engem. Furcsa volt."],
        ["Nyomozó", "Hol volt 23 és 24 óra között?"],
        ["Lili", "A fülkémben, aztán fél tizenkettő körül kimentem a folyosóra cigarettázni. Láttam egy nőt a nagybátyám ajtaja előtt, egy pohárral a kezében. Háttal állt, és gyorsan bement."],
        ["Nyomozó", "Volt valami feltűnő rajta?"],
        ["Lili", "Erős ibolyaillat maradt utána a folyosón. Édes, régimódi illat."]
      ]
    },
    {
      id: 2,
      nev: "Dr. Fehér Ottó",
      vallomas: [
        ["Nyomozó", "Ön vizsgálta meg a holttestet. Mit talált?"],
        ["Fehér", "Tág pupillák, kékes ajkak, leállt szív. Ez erős szívméreg: gyűszűvirág-kivonat, nagy adagban."],
        ["Nyomozó", "Honnan ismeri fel ilyen biztosan?"],
        ["Fehér", "Harminc éve vagyok szívgyógyász. A betegeimnek én is ezt írom fel, cseppenként, kis adagban."],
        ["Nyomozó", "Van önnél ilyen szer?"],
        ["Fehér", "Volt. Az orvosi táskámban mindig van egy üvegcse. Vacsora után vettem észre, hogy a táska nyitva van, és az üvegcse hiányzik."],
        ["Nyomozó", "Miért nem szólt rögtön?"],
        ["Fehér", "Féltem, hogy rám terelődik a gyanú. Viktor harminc éve a barátom volt, mégis én lennék az első, akire gondolnak."],
        ["Nyomozó", "Hol hagyta a táskát vacsora közben?"],
        ["Fehér", "Az ülésen, magam mellett. Szabó kisasszony ült mellettem, Lili kisasszony szemben. Pár percre kimentem kezet mosni."],
        ["Nyomozó", "Amikor visszajött, észrevett valamit?"],
        ["Fehér", "Szabó kisasszony épp a retiküljét csukta be, Lili kisasszony az ablakon bámult ki. Akkor nem tűnt fontosnak."]
      ]
    },
    {
      id: 3,
      nev: "Szabó Margit",
      vallomas: [
        ["Nyomozó", "Mióta dolgozik a bárónak?"],
        ["Margit", "Tizenkét éve. Én intéztem minden levelét, minden számláját és a gyár könyvelését is."],
        ["Nyomozó", "Miért utaztak Bécsbe?"],
        ["Margit", "Üzleti ügyben. Valami ügyvédi megbeszélés, a báró nem mondta el pontosan."],
        ["Nyomozó", "Ön intéz mindent, mégsem tudja, miért utaznak?"],
        ["Margit", "A báró néha titkolózott. Nem az én dolgom volt kérdezősködni."],
        ["Nyomozó", "Mi történt vacsora után?"],
        ["Margit", "Jó éjszakát kívántam a bárónak az étkezőkocsiban, és visszamentem a fülkémbe. Utána már nem találkoztunk."],
        ["Nyomozó", "Hol volt 23 óra után?"],
        ["Margit", "A fülkémben. Tizenegykor lefeküdtem, és reggelig ki sem mozdultam. Nagyon fáradt voltam."],
        ["Nyomozó", "Milyen parfümöt használ?"],
        ["Margit", "Ez mégis hogy jön ide? Ibolyát. Miért kérdezi?"]
      ]
    },
    {
      id: 4,
      nev: "Varga Imre",
      vallomas: [
        ["Nyomozó", "Mit szolgált fel a bárónak este?"],
        ["Varga", "Halászlét, aztán borjúpaprikást. A báró alig evett, inkább az unokahúgával vitatkozott."],
        ["Nyomozó", "Mi történt vacsora után?"],
        ["Varga", "23:20-kor csengetett a 3-as fülkéből, egy pohár konyakot kért. Itt a rendelési cédula."],
        ["Nyomozó", "Ön vitte be a konyakot?"],
        ["Varga", "Nem egészen. A folyosón találkoztam Szabó kisasszonnyal. Azt mondta, úgyis beszélnie kell a báróval, majd ő beviszi."],
        ["Nyomozó", "Nem tűnt ez furcsának?"],
        ["Varga", "A titkárnője volt, uram. Gondoltam, munkaügy. Átadtam neki a tálcát, és visszamentem a konyhára."],
        ["Nyomozó", "Honnan van a zsebében ötvenpengős?"],
        ["Varga", "A báró adta borravalónak vacsoránál. Nagyvonalú úr volt, ezt bárkitől megkérdezheti."],
        ["Nyomozó", "Látott még valakit a folyosón?"],
        ["Varga", "Később a báró unokahúgát, az ablaknál cigarettázott. Mást senkit."]
      ]
    }
  ],

  // Bizonyíték összerendelések a gyanúsítottakkal
  bizonyitekok: {
    e1: 2,   // Üres gyógyszeres üvegcse → Dr. Fehér Ottó
    e2: 4,   // Rendelési cédula → Varga Imre
    e3: 1,   // A bank fizetési felszólítása → Kertész Lili
    e4: 3,   // Ibolyaillatú zsebkendő → Szabó Margit
    e5: 4,   // Ötvenpengős bankjegy → Varga Imre
    e6: 3    // A báró jegyzetfüzete → Szabó Margit
  },

  kerdesek: {
    q1: "3",   // Ki ölte meg? → Szabó Margit
    q2: "c",   // Indíték → rájött a sikkasztásra
    q3: "d",   // Hogyan? → a konyakba öntötték a folyosón
    q4: "a",   // Honnan a méreg? → Dr. Fehér orvosi táskájából
    q5: "b"    // Mi cáfolja az alibit? → rendelési cédula és a pincér vallomása
  }
};