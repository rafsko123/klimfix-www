import React from "react";
import Img from "gatsby-image";
import { useDetailingImage } from "./useDetailingImage";


const useDetailingData = () => {
  const image = useDetailingImage();

  return [
    {
      title: <>KOREKTY LAKIERU<br />RZESZÓW</>,
      id: 'korekty-lakieru',
      short_title: "Korekty lakieru",
      image: <Img fluid={image.service_1.childImageSharp.fluid} />,
      description: 'Przywróć swojemu autu dawny blask z naszą specjalistyczną korektą lakieru. Usuwamy zarysowania, matowe miejsca i niedoskonałości, odnawiając głęboki połysk Twojego pojazdu. Piękno auta w najlepszym wydaniu z nami.',
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
    {
      title: <>POWŁOKI CERAMICZNE<br />RZESZÓW</>,
      id: 'powloki-ceramiczne',
      short_title: "Powłoki ceramiczne",
      image: <Img fluid={image.service_2.childImageSharp.fluid} />,
      description: "Zabezpiecz i podkreśl blask Twojego pojazdu dzięki najlepszym powłokom ceramicznym. Oferujemy ochronę przed promieniowaniem UV i zabrudzeniami, zapewniając jednocześnie nieskazitelny połysk. Twoje auto będzie dłużej wyglądać jak nowe i będzie łatwiejsze w konserwacji. Wybierz trwałość i estetykę z nami.",
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
    {
      title: <>PRANIE TAPICERKI<br /> RZESZÓW</>,
      id: 'pranie-tabicerki',
      short_title: "Pranie tapicerki",
      image: <Img fluid={image.service_3.childImageSharp.fluid} />,
      description: "Odśwież wygląd wnętrza Twojego auta dzięki naszej profesjonalnej usłudze prania tapicerki samochodowej. Skutecznie usuwamy plamy, brud i nieprzyjemne zapachy, przywracając tapicerce świeżość i estetykę. Wybierz jakość i doświadczenie – zadbaj o komfort jazdy z nami.",
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
    {
      title: "DECHROMING RZESZÓW",
      id: 'dechroming',
      short_title: "Dechroming",
      image: <Img fluid={image.service_4.childImageSharp.fluid} />,
      description: "Nie przepadasz za chromowanymi elementami w swoim aucie? Podkreśl unikalny charakter Twojego auta dzięki usłudze dechromingu. Pozbądź się standardowych, chromowanych elementów, wybierając nowoczesne i eleganckie wykończenie. Indywidualizuj swój pojazd z nami.",
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
    {
      title: <>OKLEJANIE FOLIĄ PPF<br /> RZESZÓW</>,
      id: 'oklejanie-folia',
      short_title: "Folie ppf",
      image: <Img fluid={image.service_5.childImageSharp.fluid} />,
      description: 'Zabezpiecz i zachowaj nieskazitelność Twojego samochodu dzięki folii PPF. Nasza profesjonalna usługa oklejania chroni lakier przed zarysowaniami, kamyczkami i czynnikami zewnętrznymi, gwarantując jednocześnie zachowanie oryginalnego wyglądu. Twoje auto zasługuje na najlepszą ochronę lakieru.',
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
    {
      title: <>RENOWACJA LAMP<br />RZESZÓW</>,
      id: 'renowacja-lamp',
      short_title: "renowacja lamp",
      image: <Img fluid={image.service_6.childImageSharp.fluid} />,
      description: 'Przywróć jasność i klarowność lampom Twojego auta dzięki renowacji. Zabieg usuwa matowość, zarysowania oraz przebarwienia, przywracając lampom ich blask i skuteczność. Bezpieczna jazda zaczyna się od jasnych świateł.',
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
    {
      title: <>PRZYCIEMNIANIE SZYB<br /> W AUCIE RZESZOW</>,
      id: 'przyciemnianie-szyb',
      short_title: "PRZYCIEMNIANIE SZYB",
      image: <Img fluid={image.service_7.childImageSharp.fluid} />,
      description: "Przyciemnianie szyb samochodowych to nie tylko estetyka, ale przede wszystkim bezpieczeństwo i komfort. Folia na szybach ogranicza widoczność dla złodziei, chroni przed promieniowaniem UV, zmniejsza nagrzewanie się wnętrza i zabezpiecza przed rozpryskiwaniem szkła w razie wypadku.",
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
    {
      title: <>CZYSZCZENIE ORAZ<br />IMPREGNACJA TAPICERKI<br />SKÓRZANEJ</>,
      id: 'czyszczenie-tapicerki',
      short_title: "TAPICERKA SKÓRZANA",
      image: <Img fluid={image.service_8.childImageSharp.fluid} />,
      description: "Czyszczenie i impregnacja tapicerki skórzanej zabezpiecza skórę przed wilgocią i blaknięciem, usuwając zabrudzenia i alergeny. Ta usługa poprawia wygląd i zwiększa odporność tapicerki, chroniąc Twoje auto. Idealne dla troszczących się o trwałość wnętrza.",
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
  ];
};

export { useDetailingData };
