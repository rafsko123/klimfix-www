import React          from "react";
import Image          from "gatsby-image";
import {ArticleImage} from "./artcileImage";


export const ArticleData = () => {
  const images = ArticleImage();

  return {
    title:           "Jak pozbyć się nieprzyjemnych zapachów w aucie?",
    subtitle:        null,
    description:     "To problem, który może dotknąć każdego kierowcę. Nie tylko utrudniają podróż, ale również mogą świadczyć o problemach z higieną lub stanem technicznym pojazdu. Na szczęście istnieje kilka sposobów na pozbycie się niechcianych zapachów w aucie, a jednym z nich jest ozonowanie.",
    metaDescription: "Istnieje kilka sposobów na pozbycie się niechcianych zapachów w aucie, a jednym z nich jest ozonowanie",
    slug:            "/strefa-wiedzy/jak-pozbyc-sie-nieprzyjemnych-zapachow-w-aucie",
    hero:            <Image alt="" fluid={images.hero.childImageSharp.fluid}/>,
    list:            <Image alt="" fluid={images.list.childImageSharp.fluid}/>,

    sections: {
      text:  {
        first: {
          title:       null,
          description: <>
                         Ozonowanie to proces, w którym generowany jest ozon - silny utleniacz, który niszczy bakterie, wirusy i grzyby, a także neutralizuje nieprzyjemne zapachy. Ozonowanie samochodu polega na wprowadzeniu ozonu do wnętrza pojazdu, gdzie utrzymuje się przez określony czas. Proces ten jest bezpieczny dla ludzi i nie powoduje uszkodzeń wnętrza samochodu. <br/><br/>
                         Ozonowanie jest jednym z najskuteczniejszych sposobów na pozbycie się nieprzyjemnych zapachów w samochodzie, ale warto pamiętać, że nie jest to jedyna metoda. Istnieją również specjalne preparaty, które neutralizują nieprzyjemne zapachy, Niezmiernie ważne jest również usuwanie przyczyn powstawania tych zapachów, takie jak regularna wymiana filtrów kabinowych , pranie tapicerki lub wyczyszczenie samego parownika.<br/><br/>
                         Jeśli chodzi o ozonowanie, warto skorzystać z usług profesjonalnej firmy zajmującej się serwisem klimatyzacji samochodowej, która posiada odpowiedni sprzęt i doświadczenie w przeprowadzaniu tego procesu. Ozonowanie nie tylko pozbywa się nieprzyjemnych zapachów, ale również jest skuteczne w usuwaniu bakterii i grzybów, co wpływa pozytywnie na stan higieny w samochodzie.<br/><br/>
                         Podsumowując, nieprzyjemne zapachy w samochodzie mogą być irytujące i utrudniające podróż, ale istnieją skuteczne sposoby na ich pozbycie się. Jednym z najskuteczniejszych jest ozonowanie, które nie tylko neutralizuje zapachy, ale również usuwa bakterie i grzyby. Warto skorzystać z usług profesjonalnej firmy zajmującej się serwisem klimatyzacji samochodowej, aby uzyskać najlepsze efekty.
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
