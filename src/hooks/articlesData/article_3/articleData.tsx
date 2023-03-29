import React          from "react";
import Image          from "gatsby-image";
import {ArticleImage} from "./artcileImage";


export const ArticleData = () => {
  const images = ArticleImage();

  return {
    title:           "Co to jest ozonowanie samochodu? Kiedy jest potrzebne i jak wygląda?",
    subtitle:        null,
    description:     "Ozonowanie samochodów to nowoczesna metoda oczyszczania powietrza, która w ostatnim czasie zyskała popularność w branży serwisu klimatyzacji samochodowej. Ozonowanie polega na wprowadzeniu do wnętrza samochodu specjalnego gazu - ozonu, który niszczy drobnoustroje, wirusy, bakterie i grzyby, a także neutralizuje nieprzyjemne zapachy. W przeciwieństwie do tradycyjnego odgrzybiania, ozonowanie jest bardziej skuteczne i bezpieczne dla zdrowia.",
    metaDescription: "Ozonowanie samochodów to nowoczesna metoda oczyszczania powietrza, która w ostatnim czasie zyskała popularność w branży serwisu klimatyzacji samochodowej.",
    slug:            "/strefa-wiedzy/co-to-jest-ozonowanie-samochodu",
    hero:            <Image alt="" fluid={images.hero.childImageSharp.fluid}/>,
    list:            <Image alt="" fluid={images.list.childImageSharp.fluid}/>,

    sections: {
      text:  {
        first: {
          title:       null,
          description: <>
                         Główną zaletą ozonowania samochodów jest skuteczność w usuwaniu bakterii, grzybów i wirusów, które gromadzą się w klimatyzacji oraz na powierzchniach wnętrza pojazdu. Dzięki temu ozonowanie zapobiega rozwojowi chorób oraz alergii. Ponadto, ozonowanie to szybki i bezinwazyjny proces, który pozwala na szybkie pozbycie się nieprzyjemnych zapachów, takich jak dym papierosowy, zapach zwierząt czy pleśni. <br/><br/>
                         Ozonowanie samochodów ma też wiele innych zalet. Jedną z nich jest brak konieczności stosowania agresywnych środków chemicznych, które mogą uszkodzić delikatne powierzchnie wnętrza samochodu. Ozon jest całkowicie bezpieczny dla zdrowia człowieka i nie pozostawia szkodliwych substancji w powietrzu. Kolejną zaletą jest fakt, że proces ozonowania jest szybki i skuteczny, co pozwala na odzyskanie czystego i świeżego powietrza w samochodzie już po jednej sesji.<br/><br/>
                         Ozonowanie samochodów a odgrzybianie to dwie różne metody oczyszczania powietrza w samochodzie. Odgrzybianie polega na usunięciu pleśni i grzybów z klimatyzacji oraz powierzchni wnętrza pojazdu. Proces ten wymaga stosowania silnych środków chemicznych, które mogą uszkodzić delikatne powierzchnie wnętrza samochodu. Odgrzybianie może również nie być skuteczne w usuwaniu bakterii i wirusów, które gromadzą się w samochodzie.<br/><br/>
                         Ozonowanie natomiast jest bardziej skuteczną i bezpieczną metodą oczyszczania powietrza, która pozwala na usunięcie bakterii, grzybów, wirusów i nieprzyjemnych zapachów.
                       </>,
        },
      },
      image: {
        first: {
          title: "",
          image: <Image alt="" fluid={images.full.childImageSharp.fluid}/>,
        },
      },
    },
  };
};
