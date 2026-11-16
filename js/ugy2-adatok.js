// 2. ügy – A Holló-kúria titka

const UGY = {
  azonosito: "ugy2",
  idok: [15, 10, 5],   // percek: 1. kör, 2. kör, 3. kör
  kuszob: 60,          // ennyi % kell a sikerhez

  gyanusitottak: [
    {
      id: 1,
      nev: "Holló Bence",
      vallomas: [
        ["Nyomozó", "Miről vitatkozott az apjával ma délután?"],
        ["Bence", "Pénzről. Kártyán vesztettem tizenkétezer pengőt, és apám nem akarta kifizetni. Ezt az egész ház hallotta."],
        ["Nyomozó", "Fenyegette az apját?"],
        ["Bence", "Azt mondtam neki, hogy még megbánja. Dühös voltam. De ezt mindenki mondja, aki veszekszik."],
        ["Nyomozó", "Tudta, hogy az új végrendelet önnek kedvez?"],
        ["Bence", "Nem. Azt hittem, kitagad. Ha tudom, nem veszekszem vele."],
        ["Nyomozó", "Hol volt 20:45 és 21:30 között?"],
        ["Bence", "A biliárdszobában Dr. Lengyellel. Háromszor vertem meg, alig figyelt a játékra."],
        ["Nyomozó", "Hallott valamit 21 óra körül?"],
        ["Bence", "A vihart. Meg egy tompa koppanást valahonnan a könyvtár felől. Azt hittem, egy ablaktábla csapódott be."],
        ["Nyomozó", "Tud a dolgozószoba rejtett ajtajáról?"],
        ["Bence", "Rejtett ajtó? Gyerekkoromban mindig kerestem, de sosem találtam. Azt hittem, csak mese."]
      ]
    },
    {
      id: 2,
      nev: "Holló Klára",
      vallomas: [
        ["Nyomozó", "Milyen volt a viszonya az apjával?"],
        ["Klára", "Hideg. Festő akarok lenni Párizsban, ő pedig azt mondta, ebből egy fillért sem kapok."],
        ["Nyomozó", "Miért ment ki a télikertbe vacsora közben?"],
        ["Klára", "Levegőzni. Nem bírtam tovább ülni az üres szék mellett, és várni apámra, aki megint nem jön."],
        ["Nyomozó", "Mikor ment ki, és mikor jött vissza?"],
        ["Klára", "Kilenc előtt pár perccel mentem ki, és negyed tíz körül jöttem vissza. Bodnár úr mindkétszer látott."],
        ["Nyomozó", "Mire kell a párizsi vonatjegy?"],
        ["Klára", "Elutazom, akár akarta apám, akár nem. Hetekkel ezelőtt megvettem a saját pénzemből."],
        ["Nyomozó", "Látott valakit a télikertből?"],
        ["Klára", "A könyvtár ablakában gyertyafény mozgott, pár perccel kilenc előtt. Azt hittem, a grófné az, ő szokott ott esténként olvasni."],
        ["Nyomozó", "Biztos benne, hogy a könyvtárban volt a fény?"],
        ["Klára", "Teljesen. A télikertből csak a könyvtár ablakai látszanak, a dolgozószobáé a másik oldalon van."]
      ]
    },
    {
      id: 3,
      nev: "Holló Irén",
      vallomas: [
        ["Nyomozó", "Hol volt 20:50 és 22:30 között?"],
        ["Irén", "A szobámban. Rettenetes migrénem volt, Dr. Lengyel adott rá port. Lefeküdtem és elaludtam."],
        ["Nyomozó", "Hallott valamit a vihar mellett?"],
        ["Irén", "Semmit. A por erős volt, mélyen aludtam, amíg Bodnár fel nem kopogtatott."],
        ["Nyomozó", "Tudott az új végrendeletről?"],
        ["Irén", "Ambrus nem beszélt nekem ilyesmiről. Biztosan nem változtatott semmin, ami engem érint."],
        ["Nyomozó", "Ismeri a dolgozószoba és a könyvtár közötti rejtett ajtót?"],
        ["Irén", "Rejtett ajtót? Ugyan, ez nem regény, nyomozó úr. Sosem hallottam róla."],
        ["Nyomozó", "Szokott esténként a könyvtárban olvasni?"],
        ["Irén", "Néha. De ma este nem, mondtam már, hogy fájt a fejem."],
        ["Nyomozó", "Vacsoránál csipkekesztyűt viselt. Hol van most?"],
        ["Irén", "Levettem, amikor lefeküdtem. Miért olyan fontos egy kesztyű?"]
      ]
    },
    {
      id: 4,
      nev: "Dr. Kardos Tivadar",
      vallomas: [
        ["Nyomozó", "Mi állt az új végrendeletben?"],
        ["Kardos", "Mindent a gyerekek kapnak. A grófné csak kis évjáradékot. Engem pedig levett végrehajtónak."],
        ["Nyomozó", "És a régi végrendeletben?"],
        ["Kardos", "Abban a kúria a grófnéra szállt volna. Nagy különbség, nyomozó úr."],
        ["Nyomozó", "Miért vette le önt végrehajtónak?"],
        ["Kardos", "Fiatalabb ügyvédet akart. Sértő, de egy megbízásért nem ölök meg senkit."],
        ["Nyomozó", "Hol volt 21 órakor?"],
        ["Kardos", "Az ebédlőben, Bodnár úr a tanúm. Egy percre sem mentem ki."],
        ["Nyomozó", "Ki tudott még a végrendelet tartalmáról?"],
        ["Kardos", "A grófné tegnap bejött az irodámba, és kérdezgetett. Nem mondtam el semmit, de úgy láttam, sejti."],
        ["Nyomozó", "Hol tartotta a végrendelet piszkozatát?"],
        ["Kardos", "A táskámban. Reggel olvastam volna fel a család előtt."]
      ]
    },
    {
      id: 5,
      nev: "Bodnár János",
      vallomas: [
        ["Nyomozó", "Hogyan találta meg a grófot?"],
        ["Bodnár", "22:30-kor kopogtam, mert kihűlt a vacsora. Nem jött válasz, az ajtó belülről zárva volt. Betörtem."],
        ["Nyomozó", "Mit látott, amikor bement?"],
        ["Bodnár", "A gróf úr a földön feküdt az íróasztal mellett. Az asztalról hiányzott a bronz holló, ami negyven éve ott áll."],
        ["Nyomozó", "Van más bejárat a dolgozószobába?"],
        ["Bodnár", "Van. A könyvespolc mögött egy ajtó vezet a könyvtárba. Csak hárman tudunk róla: a gróf úr, én és a grófné."],
        ["Nyomozó", "Hol volt 21 óra körül?"],
        ["Bodnár", "Az ebédlőben szolgáltam fel. A grófné 20:50-kor felment, Klára kisasszony nem sokkal utána kiment a télikertbe."],
        ["Nyomozó", "Látta, hova ment a grófné?"],
        ["Bodnár", "Azt mondta, a szobájába. Nem követtem, uram, az nem az én dolgom."],
        ["Nyomozó", "Miért van önnél a könyvtár kulcsa?"],
        ["Bodnár", "Nálam van a ház minden kulcsa. Negyvenkét éve szolgálom a családot."]
      ]
    },
    {
      id: 6,
      nev: "Dr. Lengyel Pál",
      vallomas: [
        ["Nyomozó", "Mit adott a grófnénak?"],
        ["Lengyel", "Fejfájás elleni port, 20:45-kor a hallban. Enyhe szer, attól senki nem alszik el."],
        ["Nyomozó", "Betegnek tűnt a grófné?"],
        ["Lengyel", "Őszintén? Nem, inkább idegesnek. A keze remegett, és folyton az órát nézte."],
        ["Nyomozó", "Merre ment utána?"],
        ["Lengyel", "Nem a lépcső felé, hanem a könyvtár felé. Akkor nem gondoltam semmire."],
        ["Nyomozó", "Hol volt ezután?"],
        ["Lengyel", "Bencével biliárdoztam fél tízig. Rosszul játszom, ezt biztos elmondta."],
        ["Nyomozó", "Mit állapított meg a holttestnél?"],
        ["Lengyel", "Egyetlen erős ütés a halántékon, valami nehéz fémtárggyal. Kilenc óra körül történt."],
        ["Nyomozó", "Lehetett baleset?"],
        ["Lengyel", "Kizárt. Aki ilyen ütést kap, nem magától esik el. Valaki szemből ütött, nagy erővel."]
      ]
    }
  ],

  // Bizonyíték összerendelések a gyanúsítottakkals
  bizonyitekok: {
    e1: 6,   // Poros üvegcse → Dr. Lengyel Pál
    e2: 3,   // Bronz hollószobor → Holló Irén
    e3: 1,   // Hitelezői levél → Holló Bence
    e4: 5,   // Kulcscsomó → Bodnár János
    e5: 2,   // Párizsi vonatjegy → Holló Klára
    e6: 4,   // Az új végrendelet piszkozata → Dr. Kardos Tivadar
    e7: 3    // Csipkekesztyű-foszlány → Holló Irén
  },

  kerdesek: {
    q1: "3",   // Ki ölte meg? → Holló Irén
    q2: "d",   // Indíték → az új végrendelet kizárta az örökségből
    q3: "b",   // Hogyan jutott be és ki? → a könyvtárba vezető rejtett ajtón
    q4: "a",   // Fegyver → bronz hollószobor
    q5: "c"    // Kinek a vallomása cáfolja az alibit? → Dr. Lengyelé és Kláráé
  }
};
