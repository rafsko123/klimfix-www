import React                  from "react";
import Img                    from "gatsby-image";
import {useLocalisationImage} from "./useLocalisationImage";


const useLocalisationData = () => {
  const image = useLocalisationImage();

  return [
    {
      image:       <Img fluid={image.localisation_1.childImageSharp.fluid}/>,
      iframe:      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10685.306083584617!2d21.973522960155723!3d50.04993513564889!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x590a4031468e9720!2sKlimFix%20Serwis%20klimatyzacji%20samochodowej!5e0!3m2!1spl!2spl!4v1662526354000!5m2!1spl!2spl",
      city:        "Rzeszów",
      street:      "ul. Krakowska 20",
      description: "Pod Galerią Nowy Świat",
      days:        "pon-sob",
      hours:       "9:00 - 18:00",
      closed:      true,
    },
    {
      image:       <Img fluid={image.localisation_2.childImageSharp.fluid}/>,
      iframe:      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5126.417835745407!2d22.0067!3d50.026181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdc57d84b6de8d73f!2sKlimFix%20Serwis%20klimatyzacji%20samochodowej!5e0!3m2!1spl!2spl!4v1662527068733!5m2!1spl!2spl",
      city:        "Rzeszów",
      street:      "ul. Podwisłocze 30",
      description: "Przy sklepie Delikatesy Centrum",
      days:        "pon-sob",
      hours:       "9:00 - 18:00",
      open:        false,
    },
    {
      image:       <Img fluid={image.localisation_3.childImageSharp.fluid}/>,
      iframe:      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d20531.022450963923!2d22.028878!3d49.966773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf593dd6b0c597b71!2sKlimFix%20Serwis%20klimatyzacji%20samochodowej!5e0!3m2!1spl!2spl!4v1662528820297!5m2!1spl!2spl",
      city:        "Tyczyn",
      street:      "ul. Orkana 1",
      description: "Przy sklepie Unimet",
      days:        "pon-sob",
      hours:       "9:00 - 18:00",
      open:        false,
    },
  ];
};

export {useLocalisationData};
