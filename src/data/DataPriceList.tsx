import React from "react";
import SnowFlake from "../assets/icons/snowflake.svg";
import Vacuum from "../assets/icons/vacuum.svg";
import Tools from "../assets/icons/tools.svg";

import PriceListImage1 from "../assets/images/priceList/price-list-1.png";
import PriceListImage2 from "../assets/images/priceList/price-list-2.png";
import PriceListImage3 from "../assets/images/priceList/price-list-3.png";
import PriceListImage4 from "../assets/images/priceList/price-list-4.png";


export const DataPriceList = [
  {
    id: "serwis-klimatyzacji",
    title: "SERWIS KLIMATYZACJI",
    icon: SnowFlake,
    image: PriceListImage1,
    content: [
      {
        title: null,
        description: <>W sytuacji rozszczelnienia układu w&nbsp;terminie do 30 dni od wykonania usługi napełniamy układ w cenie 60zł (czynnnik R134a) lub&nbsp;100zł (czynnik R1234yf) bez względu na ilość czynnika (po zwróceniu wydruku z maszyny). Po wykryciu usterki należy niezwłocznie ją zgłosić w naszym serwisie przed jej usunięciem we&nbsp;własnym zakresie.</>,
        list: [
          {
            title: "Usługa serwisowa dla czynnika R134a",
            description: "Test szczelności metodą próżniową, ozonowanie. Pierwsze i każde następne 10-100g czynnika - 30zł.",
            bolded: true,
            price: "150 zł",
          },
          {
            title: "Usługa serwisowa dla czynnika R1234yf",
            description: "Identyfikacja czynnika, test szczelności metodą prózniową, ozonowanie. Pierwsze i każde następne 10-100g czynnika - 80zł.",
            bolded: true,
            price: "180 zł",
          },
          {
            title: "Wymiana zaworka",
            description: "",
            bolded: false,
            price: "20 zł",
          },
          {
            title: "Wymiana filtra kabinowego",
            description: "",
            bolded: false,
            price: "od 20 zł",
          },
          {
            title: "Ozonowanie / odgrzybianie",
            description: "",
            bolded: false,
            price: "50 zł",
          },
          {
            title: "Czyszczenie parownika / odgrzybianie",
            description: "Bezpośrednie czyszczenie parownika za pomocą chemii wprowadzanej pod wysokim ciśnieniem.",
            bolded: false,
            price: "200 zł",
          },
          {
            title: "Sprawdzenie szczelności metodą próżniową",
            description: "Podstawowa metoda sprawdzania szczelności.",
            bolded: false,
            price: "60 zł",
          },
          {
            title: "Sprawdzenie szczelności hydrogenem",
            description: "Najdokładniejsza metoda sprawdzania szczelności. Dokładna diagnoza miejsca nieszczelności.",
            bolded: false,
            price: "150 zł",
          },
          {
            title: "Wymiana chłodnicy",
            description: null,
            bolded: false,
            price: "od 250 zł",
          },
          {
            title: "Wymiana przewodu",
            description: null,
            bolded: false,
            price: "od 100 zł",
          },
          {
            title: "Wymiana osuszacza",
            description: null,
            bolded: false,
            price: "od 100 zł",
          },
          {
            title: "Wymiana parownika",
            description: null,
            bolded: false,
            price: "od 1000 zł",
          },
        ],
      },
    ],
  },
  {
    id: "pielegnacja-samochodowa",
    title: "PIELĘGNACJA SAMOCHODOWA",
    icon: Vacuum,
    image: PriceListImage2,
    content: [
      {
        title: null,
        description: <>Cena zależna jest od typu pojazdu (osobowe, SUV, VAN, crossover) oraz stopnia zabrudzenia (sierść, błoto itp.). Usługa jest wyceniana indywidualnie. Nie ponosimy odpowiedzialności za rzeczy pozostawione w aucie.</>,
        list: [
          {
            title: "Standardowy pakiet sprzątania wnętrza auta",
            description: "Odkurzanie, czyszczenie plastików, mycie szyb, czyszczenie dywaników, aplikacja zapachu",
            bolded: true,
            price: "od 60 zł",
          },
          {
            title: "Kompleksowy pakiet sprzątania wnętrza auta",
            description: "Standardowy pakiet + dokładne czyszczenie podłogi i zakamarków, dressing",
            bolded: true,
            price: "od 100 zł",
          },
          {
            title: "Pakiet prania tapicerki",
            description: "Fotel kierowcy i pasażera, kanapa tył, bagażnik",
            bolded: false,
            price: "od 300 zł",
          },
          {
            title: "Pranie tapicerki",
            description: "",
            bolded: false,
            price: "od 70 zł",
          },
        ],
      },
    ],
  },
  {
    id: "auto-detailng",
    title: "AUTO DETAILING",
    icon: Tools,
    image: PriceListImage3,
    content: [
      {
        title: null,
        description: null,
        list: [
          {
            title: "Detailingowe czyszczenie wnętrza auta",
            description: "Nikt nie wysprząta Ci lepiej",
            bolded: false,
            price: "od 150 zł",
          },
          {
            title: "Czyszczenie i zabezpieczenie skór (komplet)",
            description: null,
            bolded: false,
            price: "od 250 zł",
          },
          {
            title: "Jednoetapowa korekta lakieru",
            description: <>Mycie detailingowe, dekontaminacja lakieru, <b>jednoetapowa</b> korekta lakieru, aplikacja wosku 3-miesięcznego +&nbsp;niewidzialna wycieraczka GRATIS!</>,
            bolded: false,
            price: "od 500 zł",
          },
          {
            title: "Wieloetapowa korekta lakieru",
            description: <>Mycie detailingowe, dekontaminacja lakieru, <b>wieloetapowa</b> korekta lakieru, aplikacja wosku 3-miesięcznego +&nbsp;niewidzialna wycieraczka GRATIS!</>,
            bolded: false,
            price: "od 1000 zł",
          },
          {
            title: "Podstawowe polerowanie reflektorów",
            description: "Maszynowe polerowanie reflektorów pastą polerską.",
            bolded: false,
            price: "50 zł / szt",
          },
          {
            title: "Renowacja reflektorów",
            description: "Usuwanie głębokich rys poprzez matowienie reflektora wraz maszynowym polerowaniem pastą polerską.",
            bolded: false,
            price: "200 ZŁ / SZT",
          },
          {
            title: "Polerowanie szyby",
            description: null,
            bolded: false,
            price: "od 150 zł",
          },
          {
            title: "Twardy wosk",
            description: <>Mycie detailingowe, dekontaminacja lakieru,<b>aplikacja wosku 3-miesięcznego</b>+&nbsp;niewidzialna wycieraczka GRATIS!</>,
            bolded: false,
            price: "od 300 zł",
          },
          {
            title: "Powłoka polimerowa",
            description: <>Mycie detailingowe, dekontaminacja lakieru, <b>aplikacja powłoki polimerowej 6-miesięcznej</b> +&nbsp;niewidzialna wycieraczka GRATIS!</>,
            bolded: false,
            price: "od 350 zł",
          },
          {
            title: "Powłoka ceramiczna",
            description: <>Mycie detailingowe wraz z dekontaminacją, jednoetapowa korekta lakieru, <b>aplikacja powłoki ceramicznej 3-letniej</b> Nasiol, niewidzialna wycieraczka GRATIS!</>,
            bolded: false,
            price: "od 1500 zł",
          },
          {
            title: "Niewidzialna wycieraczka",
            description: "Szyby przednie + przednie boczne",
            bolded: false,
            price: "50 ZŁ",
          },
        ],
      },
    ],
  },
  {
    id: "wraping",
    title: "WRAPPING",
    icon: Tools,
    image: PriceListImage4,
    content: [
      {
        title: "Przyciemnianie szyb",
        description: <>
          Do przyciemniania szyb używamy folii firmy MAXUEL z serii VIGO oraz VEXO.
          <ul>
            <li>seria VIGO - folia ceramiczno-węglowa, niemetalizowana, większa redukcja całkowitej energii słonecznej, 7-letnia gwarancja, dostępne opcje przyciemnienia 5%, 15%, 20%, 30%, 45%.</li>
            <li> seria VEXO - folia niemetalizowana, 5-letnia gwarancja, tańsza opcja, dostępne opcje ściemnienia 5%, 15%, 20%, 30%, 40%, 50%, 70%.</li>
          </ul>
        </>,
        list: [
          {
            title: "Pasek przeciwsłoneczny",
            description: null,
            bolded: false,
            price: "100 zł",
          },
          {
            title: "Przyciemnienie szyb tylnych",
            description: null,
            bolded: false,
            price: "od 300 zł",
          },
          {
            title: "Przyciemnienie szyb przednich bocznych",
            description: null,
            bolded: false,
            price: "80 zł / szt",
          },
        ],
      },
      {
        title: "Bezbarwne folie ochronne PPF",
        description: null,
        list: [
          {
            title: "Zabezpieczenie lamp",
            description: "Oklejenie reflektorów folią ochronną PPF",
            bolded: false,
            price: "150 zł / szt",
          },
          {
            title: "Wnęki klamek",
            description: "Oklejenie wnęk klamek folią ochronną PPF",
            bolded: false,
            price: "50 zł / szt",
          },
          {
            title: "Parapet załadunkowy bagażnika",
            description: "Oklejenie parapetu załadunkowego bagażnika folią ochronną PPF",
            bolded: false,
            price: "300 zł",
          },
          {
            title: "Pakiet full front",
            description: "Oklejenie zderzaka, maski, przednich lamp, błotników, lusterek, słupków A, rantów drzwi folią ochronną PPF",
            bolded: false,
            price: "od 2 800 zł",
          },
          {
            title: "Pakiet full body",
            description: "Oklejenie całego auta folią ochronną PPF",
            bolded: false,
            price: "od 10 000 zł",
          },
          {
            title: "Zabezpieczenie elementów wnętrza",
            description: "Oklejenie wybranych elementów wnętrza auta folią ochronną PPF",
            bolded: false,
            price: "wycena indywidualna",
          },
        ],
      },
      {
        title: "Przyciemnianie reflektorów",
        description: null,
        list: [
          {
            title: "Przyciemnienie folią PPF",
            description: "Przyciemnienie lamp folią ochronną PPF",
            bolded: false,
            price: "200 zł / szt",
          },
          {
            title: "Przyciemnienie folią Oracal",
            description: "Przyciemnienie lamp folią Oracal",
            bolded: false,
            price: "100 zł / szt",
          },
        ]
      },
      {
        title: "Zmiana  koloru auta",
        description: null,
        list: [
          {
            title: "Dechroming",
            description: "Oklejenie folią wylewaną elementów chromowanych karoserii na kolor czarny.",
            bolded: false,
            price: "od 400 zł",
          },
        ]
      }
    ],
  },
];
