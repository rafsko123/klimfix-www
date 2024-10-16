import React from "react";
import Img from "gatsby-image";
import { useHeroSliderImage } from "./useHeroSliderImage";


const useHeroSliderData = () => {
  const image = useHeroSliderImage();

  return [
    {
      title: <>Serwis klimatyzacji<br /> w Rzeszowie,<br /> Tyczynie i&nbsp;Łańcucie</>,
      subtitle: "Pracujemy na układach z czynnikiem R134a i R1234yf, sprawdzamy szczelność, ozonujemy.",
      image: <Img fluid={image.slide_1.childImageSharp.fluid} />,
      imageMobile: <Img fluid={image.slide_mobile_1.childImageSharp.fluid} />,
      slug: "",
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
    {
      title: <>AUTO DETAILING<br /> & CAR WRAPPING<br /> RZESZÓW</>,
      subtitle: "Zadbamy o wygląd Twojego auta nadając mu nową świeżość.",
      image: <Img fluid={image.slide_3.childImageSharp.fluid} />,
      imageMobile: <Img fluid={image.slide_mobile_3.childImageSharp.fluid} />,
      slug: "",
      ctaText: "Zarezerwuj wizytę",
      ctaUrl: "+48534520569",
    },
    // {
    //   title:       <>Napełnianie czynnikiem R134A&nbsp;i&nbsp;R1234YF</>,
    //   subtitle:    "Najwyższy czas pomyśleć o lecie!",
    //   image:       <Img fluid={image.slide_2.childImageSharp.fluid}/>,
    //   imageMobile: <Img fluid={image.slide_mobile_2.childImageSharp.fluid}/>,
    //   slug:        "",
    //   ctaText:     "Zadzwoń",
    //   ctaUrl:      "+48534520569",
    // },
  ];
};

export { useHeroSliderData };
