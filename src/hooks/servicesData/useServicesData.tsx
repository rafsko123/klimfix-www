import React from "react";

import SnowflakeIcon from "../../assets/icons/snowflake.svg";
import VacuumImage from "../../assets/icons/vacuum.svg";
import ToolsIcon from "../../assets/icons/tools.svg";
import CarIcon from "../../assets/icons/car.svg";


const useServicesData = () => {
  return [
    {
      title: "Serwis klimatyzacji",
      description: <>Napełniamy układ zarówno starym czynnikiem (R134a) jak&nbsp;i&nbsp;nowym (R1234yf). W&nbsp;pakiecie otrzymasz sprawdzenie szczelności oraz ozonowanie.</>,
      icon: SnowflakeIcon,
      slug: "/uslugi-i-cennik#serwis-klimatyzacji",
      buttonText: "Sprawdź cennik",
    },
    {
      title: "Pielęgnacja samochodowa",
      description: <>Odświeżymy wnętrze Twojego auta. W&nbsp;usługach oferujemy m.in. odkurzanie, pranie tapicerki i&nbsp;czyszczenie skór. Czyste wnętrze to komfort jazdy!</>,
      icon: VacuumImage,
      slug: "/uslugi-i-cennik#pielegnacja-samochodowa",
      buttonText: "Sprawdź cennik",
    },
    {
      title: "Auto Detaling",
      description: <>Usuniemy zarysowania i&nbsp;wydobędziemy blask z lakieru. Oferujemy również renowację zamglonych reflektorów oraz&nbsp;czyszczenie i&nbsp;zabezpieczenie skór.</>,
      icon: ToolsIcon,
      slug: "/uslugi-i-cennik#auto-detailng",
      buttonText: "Sprawdź cennik",
    },
    {
      title: "Car Wrapping",
      description: <>Unikalny wygląd auta i&nbsp;ochrona przed uszkodzeniami -&nbsp;okleimy Twój pojazd wysokiej jakości folią, by jak najdłużej wyglądał jakby dopiero wyjechał z salonu</>,
      icon: CarIcon,
      slug: "/uslugi-i-cennik#wraping",
      buttonText: "Sprawdź cennik",
    },
  ];
};

// @ts-ignore
export { useServicesData };
