import React              from "react";
import Img                from "gatsby-image";
import {useServicesPhoto} from "./useServicesPhoto";

import SnowflakeIcon from "../../assets/icons/snowflake.svg";
import VacuumImage   from "../../assets/icons/vacuum.svg";


const useServicesData = () => {
  const image = useServicesPhoto();

  return [
    {
      title:       <>SERWIS<br/>KLIMATYZACJI</>,
      description: "Napełniamy układ zarówno starym czynnikiem (R134a) jak i nowym (R1234yf). W pakiecie oferujemy sprawdzenie szczelności oraz ozonowanie!",
      icon:        SnowflakeIcon,
      image:       <Img fluid={image.service_image_1.childImageSharp.fluid}/>,
      slug:        "/uslugi-i-cennik",
      buttonText:  "Sprawdź cennik",
    },
    {
      title:       <>SPRZĄTANIE<br/>WNĘTRZA AUTA</>,
      description: "Odświeżymy wnętrze Twojego auta. W usługach oferujemy m.in. odkurzanie, pranie tapicerki i czyszczenie skór. Czyste wnętrze to komfort jazdy!",
      icon:        VacuumImage,
      image:       <Img fluid={image.service_image_2.childImageSharp.fluid}/>,
      slug:        "/uslugi-i-cennik",
      buttonText:  "Sprawdź cennik",
    },
  ];
};

export {useServicesData};
