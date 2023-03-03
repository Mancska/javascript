window.addEventListener("load", init);

function init() {
  const objlist = [
    {
      nev: "Zoé",
      mondat: "Befejeztem tegnap a szobám kifestését!",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },

    {
      nev: "Kornél",
      mondat: "Finom volt a gyros ebéd.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },

    {
      nev: "Leila",
      mondat:
        "Tegnap volt itt a várandós nővérem, és a baba lerúgta a kezem a hasáról.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },

    {
      nev: "Bónó",
      mondat: "Vettem egy új síkesztyűt.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },

    {
      nev: "Hunor",
      mondat:
        "Az egyik kedvenc játékom le volt árazva, és megvettem, és hétfőn született meg az unokatestvérem gyereke.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },

    {
      nev: "Bence",
      mondat: "Hálát adtam az úrnak, hogy lementem edzeni.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },

    {
      nev: "Ádám",
      mondat: "Kirúgták a gyökér főnökömet.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },

    {
      nev: "Dominik",
      mondat:
        "Sose szerettem a csípőset és mégis vágytam rá és ettem és nagyon jól esett.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },

    {
      nev: "Ricsi",
      mondat:
        "Tegnap elaludtam Csolti Péter tanár úr óráján és egész nap aludtam.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },
    {
      nev: "Martin",
      mondat: "Ember, most jöttem a templomból",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },
    {
      nev: "Valentin",
      mondat: "Vezethettem a volt munkahelyem új céges autóját.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },
    {
      nev: "Lél",
      mondat: "Finom volt a vacsi.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },
    {
      nev: "Laci",
      mondat:
        "Van egy játék és készítettek hozzá egy grafikai modult és és abba találtam egy pixelek elsimitására apit és a mozgásérzékelést, és a jobban nézett ki a játék.",
      kor: 18,
      tesok: 0,
      szemszin: "zold",
    },
  ];
  const tablazat = tablazatMegjelenit(objlist);
  console.log(objlist);
  const tablazatSZuloelem = document.querySelectorAll("#tablazat");
  const txt = osszeallit(objlist);
  const szuloElem = document.querySelectorAll("article");
  kiir(txt, szuloElem);
  kiir(tablazat, tablazatSZuloelem);
}

function osszeallit(lista) {
  let txt = "";
  for (let index = 0; index < lista.length; index++) {
    txt +=
      "<div>" +
      "<h3>" +
      lista[index].nev +
      "</h3>" +
      "<p>" +
      lista[index].mondat +
      "</p>" +
      "</div>";
  }
  return txt;
}

function kiir(txt, szuloElem) {
  szuloElem[0].innerHTML = txt;
}
function tablazatMegjelenit(objlist) {
  var tablazatSzoveg = "<table><tr><th>nevek</th><th>mondat</th></tr>";
  for (let index = 0; index < array.length; index++) {
   
    let Object=objlist[i];
  for (const key in Object {
    if (Object.hasOwnProperty.call(Object, key)) {
      const element = Object[key];
      tablazatSzoveg+="<td>"+Object[key]+"</td>"
      
    }
  }
  
  }
  for (let index = 0; index < objlist.length; index++) {
    const element = objlist[index];
    tablazatSzoveg +=
      "<tr><td>" +
      objlist[index].nev +
      "</td><td>" +
      objlist[index].mondat +
      "</td></tr>";
  }
  tablazatSzoveg += "</table>";
  return tablazatSzoveg;
}
