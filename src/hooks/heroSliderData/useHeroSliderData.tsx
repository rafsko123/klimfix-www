import React                from "react";
import Img                  from "gatsby-image";
import {useHeroSliderImage} from "./useHeroSliderImage";


const useHeroSliderData = () => {
  const image = useHeroSliderImage();

  return [
    {
      title:    "Schłodzone i czyste wnętrze auta",
      subtitle: "Profesjonalnie dbamy o:",
      image:    <Img fluid={image.slide_1.childImageSharp.fluid}/>,
      slug:     "",
    },
    {
      title:    <>Napełnianie czynnikiem R144A&nbsp;i&nbsp;R1234YF</>,
      subtitle: "Najwyższy czas pomyśleć o lecie!",
      image:    <Img fluid={image.slide_2.childImageSharp.fluid}/>,
      slug:     "",
    },
    {
      title:    "OTWORZYLIŚMY SEZON!",
      subtitle: "Najwyższy czas pomyśleć o lecie!",
      image:    <Img fluid={image.slide_3.childImageSharp.fluid}/>,
      slug:     "",
    },
  ];
};

export {useHeroSliderData};
