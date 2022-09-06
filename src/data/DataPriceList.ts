import SnowFlake from "../assets/icons/snowflake.svg";
import Vacuum    from "../assets/icons/vacuum.svg";

import PriceListImage1 from "../assets/images/price-list/price-list-1.png";
import PriceListImage2 from "../assets/images/price-list/price-list-2.png";


export const DataPriceList = [
  {
    title:       "SERWIS KLIMATYZACJI",
    description: "W sytuacji rozszczelnienia układu w terminie od 1 do 30 dni od wykonania usługi (po usunięciu usterki nieszczelności we własnym zakresie) napełniamy układ w cenie 60zł (czynnnik R134a) lub 100zł (czynnik R1234yf) bez względu na ilość czynnika (po zwróceniu wydruku z maszyny).\n",
    icon:        SnowFlake,
    image:       PriceListImage1,
    content:     [
      {
        title:       "Usługa serwisowa dla czynnika R134a",
        description: "Napełnianie układu do 300g czynnika, sprawdzenie szczelności, ozonowanie. Każde następne 10-100g czynnika - 20zł.",
        bolded:      true,
        price:       "160 zł",
      },
      {
        title:       "Usługa serwisowa dla czynnika R1234yf",
        description: "Sprawdzenie szczelności, ozonowanie. Pierwsze i każde następne 10-100g czynnika - 60zł.",
        bolded:      true,
        price:       "140 zł",
      },
      {
        title:       "Wymiana zaworka",
        description: "",
        bolded:      false,
        price:       "20 zł",
      },
      {
        title:       "Wymiana filtra kabinowego",
        description: "",
        bolded:      false,
        price:       "20 zł",
      },
      {
        title:       "Ozonowanie/odgrzybianie",
        description: "",
        bolded:      false,
        price:       "50 zł",
      },
      {
        title:       "Sprawdzenie szczelności",
        description: "",
        bolded:      false,
        price:       "60 zł",
      },
    ],
  },
  {
    title:       "PIELĘGNACJA SAMOCHODOWA",
    description: "Cena zależna jest od typu pojazdu (osobowe, SUV, VAN, crossover) oraz stopnia zabrudzenia (sierść, błoto itp.). Usługa jest wyceniana indywidualnie. Nie ponosimy odpowiedzialności za rzeczy pozostawione w aucie.\n",
    icon:        Vacuum,
    image:       PriceListImage2,
    content:     [
      {
        title:       "Standardowy pakiet sprzątania wnętrza auta",
        description: "Odkurzanie, czyszczenie plastików, mycie szyb, czyszczenie dywaników",
        bolded:      true,
        price:       "od 50 zł",
      },
      {
        title:       "Kompleksowy pakiet sprzątania wnętrza auta",
        description: "Odkurzanie, czyszczenie plastików, mycie szyb, czyszczenie dywaników",
        bolded:      true,
        price:       "od 50 zł",
      },
      {
        title:       "Pranie tapicerki fotela",
        description: "Siedzisko + oparcie",
        bolded:      false,
        price:       "od 50 zł",
      },
      {
        title:       "Pranie tylnej kanapy",
        description: "",
        bolded:      false,
        price:       "od 100 zł",
      },
      {
        title:       "Pranie kompletu foteli",
        description: "",
        bolded:      false,
        price:       "od 200 zł",
      },
      {
        title:       "Pranie bagażnika",
        description: "",
        bolded:      false,
        price:       "od 50 zł",
      },
      {
        title:       "Pranie podłogi",
        description: "",
        bolded:      false,
        price:       "od 80 zł",
      },
      {
        title:       "Odkurzanie i czyszczenie dywaników",
        description: "",
        bolded:      false,
        price:       "od 30 zł",
      },
      {
        title:       "Czyszczenie plastików",
        description: "",
        bolded:      false,
        price:       "od 20 zł",
      },
      {
        title:       "Mycie szyb",
        description: "",
        bolded:      false,
        price:       "od 10 zł",
      },
    ],
  },
];
