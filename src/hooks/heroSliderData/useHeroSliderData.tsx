import React                from "react";
import Img                  from "gatsby-image";
import {useHeroSliderImage} from "./useHeroSliderImage";


const useHeroSliderData = () => {
  const image = useHeroSliderImage();

  return [
    {
      title:       <>Sezon<br/>otwarty</>,
      subtitle:    "Komfort jazdy w lecie z KlimFix!",
      image:       <Img fluid={image.slide_3.childImageSharp.fluid}/>,
      imageMobile: <Img fluid={image.slide_mobile_3.childImageSharp.fluid}/>,
      slug:        "",
      ctaText:     "Zadzwoń",
      ctaUrl:      "+48534520569",
    },
    {
      title:       <>Schłodzone<br/> i czyste<br/> wnętrze auta</>,
      subtitle:    "Profesjonalnie dbamy o",
      image:       <Img fluid={image.slide_1.childImageSharp.fluid}/>,
      imageMobile: <Img fluid={image.slide_mobile_1.childImageSharp.fluid}/>,
      slug:        "",
      ctaText:     "Zadzwoń",
      ctaUrl:      "+48534520569",
    },
    {
      title:       <>Napełnianie czynnikiem R134A&nbsp;i&nbsp;R1234YF</>,
      subtitle:    "Najwyższy czas pomyśleć o lecie!",
      image:       <Img fluid={image.slide_2.childImageSharp.fluid}/>,
      imageMobile: <Img fluid={image.slide_mobile_2.childImageSharp.fluid}/>,
      slug:        "",
      ctaText:     "Zadzwoń",
      ctaUrl:      "+48534520569",
    },
  ];
};

export {useHeroSliderData};
