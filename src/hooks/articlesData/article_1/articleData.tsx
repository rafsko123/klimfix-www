import React          from "react";
import Image          from "gatsby-image";
import {ArticleImage} from "./artcileImage";


export const ArticleData = () => {
  const images = ArticleImage();

  return {
    title:           "Jak często wykonywać serwis klimatyzacji samochodowej i co to daje?",
    subtitle:        null,
    description:     <>
                       Klimatyzacja samochodowa to nie tylko wygoda, ale również element bezpieczeństwa, szczególnie w upalne dni. Jednak, aby działała sprawnie, należy pamiętać o regularnych przeglądach i serwisach. Jednym z ważniejszych czynników jest stan czynnika chłodzącego w układzie klimatyzacji. Często pojawiające się pytanie brzmi, jak często uzupełniać czynnik w klimatyzacji samochodowej.
                       <br/>
                       <br/>
                       Zaleca się, aby stan czynnika był sprawdzany raz w roku lub po przejechaniu około 30 tysięcy kilometrów. Jeśli klimatyzacja nie działa jak należy, należy przeprowadzić szczegółową diagnozę, która pomoże ustalić przyczynę problemu. Warto jednak pamiętać, że uzupełnienie czynnika chłodzącego nie rozwiąże problemu, jeśli przyczyna usterki jest inna. W takiej sytuacji konieczna jest wizyta w warsztacie samochodowym
                     </>,
    metaDescription: "Lorem ipsum dolor",
    slug:            "/strefa-wiedzy/jak-czesto-wykonywac-serwis-klimatyzacji-samochodowej",
    hero:            <Image alt="" fluid={images.hero.childImageSharp.fluid}/>,
    list:            <Image alt="" fluid={images.list.childImageSharp.fluid}/>,

    sections: {
      text:  {
        first:  {
          title: "Rodzaje czynników chłodzących - R134a oraz R1234yf",
          description:
                 <>
                   R134a był standardowym czynnikiem chłodzącym stosowanym w klimatyzacjach samochodowych przez długi czas. Jednakże, ze względu na swoją wysoką zawartość fluorowęglowodorów, które wpływają negatywnie na środowisko, został zastąpiony przez bardziej ekologiczny R1234yf.
                   <br/>
                   <br/>
                   Gaz R1234yf i R134a są obydwa stosowane jako czynniki chłodnicze w układach klimatyzacji . Różnią się jednak kilkoma ważnymi czynnikami:
                   <br/>
                   <br/>
                   <ul>
                     <li>Właściwości fizyczne: R1234yf ma niższe ciśnienie parowania i niższą gęstość niż R134a. Oznacza to, że R1234yf wymaga mniejszej ilości gazu, aby osiągnąć taką samą wydajność chłodniczą jak R134a.</li>
                     <li>Wpływ na środowisko: R1234yf uważany jest za bardziej przyjazny dla środowiska niż R134a, ponieważ ma o wiele niższy potencjał ocieplenia globalnego. Potencjał ten mierzy wpływ substancji na zmiany klimatu, a mniejsza wartość oznacza mniejszy wpływ na środowisko.</li>
                     <li>Bezpieczeństwo: W przypadku stosowania w samochodach, gaz R1234yf jest łatwopalny w przeciwieństwie do R134a , wymaga również zastosowania szczególnych środków ostrożności przy przeprowadzaniu prac serwisowych lub naprawczych.</li>
                     <li>Koszty: R1234yf jest zazwyczaj droższy niż R134a, ze względu na bardziej złożony proces produkcji i niższą dostępność.</li>
                   </ul>
                   <br/>
                   <p>Podsumowując, R1234yf i R134a różnią się przede wszystkim właściwościami fizycznymi, wpływem na środowisko, bezpieczeństwem oraz kosztami. R1234yf jest bardziej przyjazny dla środowiska, ale również droższy w użyciu.</p>
                 </>,
        },
        second: {
          title:       "Serwis klimatyzacji samochodowej",
          description: "Regularny serwis klimatyzacji samochodowej jest ważny nie tylko ze względów bezpieczeństwa, ale również dla utrzymania optymalnej wydajności układu. W trakcie serwisu klimatyzacji samochodowej należy przeprowadzić kontrolę szczelności układu klimatyzacji. Najczęściej stosowane są dwie metody: próżniowa oraz przy użyciu hydrogenu.",
        },
        third:  {
          title:       "Jak sprawdzać szczelność układu klimatyzacji?",
          description: <>
                         W metodzie próżniowej z układu jest odsysane powietrze i następnie, za pomocą pompy próżniowej, tworzona jest próżnia w układzie. Jeśli ciśnienie powietrza pozostaje stabilne, to znak, że układ jest szczelny.
                         <br/>
                         <br/>
                         Sprawdzenie szczelności za pomocą hydrogenu polega na dodaniu do układu klimatyzacji mieszanki wodoru i azotu, a następnie wykrywaniu wycieków wodoru za pomocą specjalnego detektora. Detektor wykrywa wodór w powietrzu i emituje dźwięk, sygnał świetlny lub wibracje, informując operatora o obecności wycieku. Jest to bardzo skuteczna metoda wykrywania wycieków, które mogą prowadzić do strat w wydajności, awarii lub zwiększenia zużycia energii .Metoda z wykorzystaniem hydrogenu jest jedną z najlepszych dostępnych na rynku.
                       </>,
        },
        fourth: {
          title: "Powody dla których należy wymieniać filtry kabinowe w samochodzie:",
          description:
                 <ul>
                   <li>Poprawa jakości powietrza w kabinie samochodu - filtry kabinowe zapobiegają przedostawaniu się zanieczyszczeń z zewnątrz do wnętrza samochodu, co poprawia jakość powietrza w kabinie.</li>
                   <li>Zdrowie i komfort pasażerów - filtry kabinowe usuwają z powietrza pyłki, spaliny, drobnoustroje, alergeny i inne cząstki, co może pomóc w poprawie zdrowia i komfortu pasażerów.</li>
                   <li>Poprawa wydajności klimatyzacji - czyste filtry kabinowe umożliwiają lepszy przepływ powietrza, co może zwiększyć wydajność klimatyzacji.</li>
                 </ul>,
        },
        fifth:  {
          title:       "Rodzaje filtrów kabinowych:",
          description: <>
                         <ul>
                           <li>Filtry mechaniczne - są to najprostsze filtry kabinowe, składające się z papierowej wkładki złożonej w harmonijkę. Cechują się niską ceną i łatwością wymiany, ale nie są skuteczne w usuwaniu bardziej zaawansowanych zanieczyszczeń.</li>
                           <li>Filtry węglowe - zawierają aktywny węgiel, który skutecznie usuwa nieprzyjemne zapachy i gazowe zanieczyszczenia z powietrza. Są one bardziej skuteczne niż filtry mechaniczne, ale zwykle kosztują więcej.</li>
                           <li>Filtry HEPA - zapewniają najwyższą skuteczność w usuwaniu pyłków, alergenów i innych drobnoustrojów z powietrza. Są to zwykle filtry wielowarstwowe, które składają się z mechanicznej warstwy filtrującej, warstwy węglowej i warstwy HEPA. Są one najbardziej skuteczne, ale zwykle też najdroższe.</li>
                         </ul>
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
