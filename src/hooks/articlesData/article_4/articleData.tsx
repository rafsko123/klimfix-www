import React          from "react";
import Image          from "gatsby-image";
import {ArticleImage} from "./artcileImage";


export const ArticleData = () => {
  const images = ArticleImage();

  return {
    title:           "Jak sprawdzić jaki czynnik jest w aucie? Różnice między nowym a starym czynnikiem.",
    subtitle:        null,
    description:     <>
                       Sprawdzenie rodzaju czynnika chłodzącego w układzie klimatyzacji jest ważnym krokiem w dbaniu o prawidłowe działanie systemu. Warto wiedzieć, że w samochodach stosowane są dwa główne rodzaje czynników: R134a i R1234yf. W tym artykule przyjrzymy się jak odróżnić jeden od drugiego i dlaczego jest to ważne. <br/><br/>
                       <b>R134a</b> jest stosowany w starszych modelach samochodów i jest powszechnie stosowany od lat 90-tych. Jest to czynnik chłodzący, który jest szkodliwy dla środowiska, ponieważ przyczynia się do zwiększenia efektu cieplarnianego. W wyniku tego UE wprowadziła regulacje, które nakładały na producentów samochodów wymóg stosowania bardziej ekologicznych czynników chłodniczych. <br/><br/>
                       W wyniku tego wprowadzono <b>R1234yf</b>, który jest uważany za bardziej przyjazny dla środowiska niż R134a. Jest to czynnik, który jest stosowany w nowszych modelach samochodów i spełnia wymogi norm ekologicznych.
                     </>,
    metaDescription: "Sprawdzenie rodzaju czynnika chłodzącego w układzie klimatyzacji jest ważnym krokiem w dbaniu o prawidłowe działanie systemu.",
    slug:            "/strefa-wiedzy/jak-sprawdzic-jaki-czynnik-jest-w-aucie",
    hero:            <Image alt="" fluid={images.hero.childImageSharp.fluid}/>,
    list:            <Image alt="" fluid={images.list.childImageSharp.fluid}/>,

    sections: {
      text:  {
        first: {
          title:       null,
          description: <>
                         Jak sprawdzić, jaki rodzaj czynnika znajduje się w Twoim układzie klimatyzacji? Najlepszym sposobem jest sprawdzenie naklejki umieszczonej pod maską samochodu. Etykieta znajduje się zazwyczaj w okolicy pasa przedniego lub od wewnętrznej strony maski Na etykiecie powinna być informacja o rodzaju czynnika chłodzącego oraz pojemności układu. <br/><br/>
                         Jeśli nie możesz znaleźć etykiety, skontaktuj się z producentem samochodu lub z serwisem klimatyzacji samochodowej, aby uzyskać informacje na temat rodzaju czynnika.<br/><br/>
                         Ważne jest, aby zawsze używać właściwego czynnika chłodzącego, który jest zalecany przez producenta samochodu. Niewłaściwy czynnik może uszkodzić układ klimatyzacji i może prowadzić do poważnych problemów z chłodzeniem. Dlatego też, jeśli zauważysz, że układ klimatyzacji nie działa prawidłowo, skontaktuj się z profesjonalistami zajmującymi się serwisem klimatyzacji samochodowej, którzy pomogą Ci zdiagnozować problem i przeprowadzą niezbędne naprawy.<br/><br/>
                         Warto również pamiętać o wymianie filtra kabinowego, który pochłania wiele nieprzyjemnych zapachów z wnętrza samochodu. Filtr ten powinien być wymieniany co roku lub częściej w przypadku palenia w samochodzie, przewożenia zwierząt domowych czy jeżdżenia po zakurzonych drogach.
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
