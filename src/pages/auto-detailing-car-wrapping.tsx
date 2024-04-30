import React from 'react';
import Seo from '../components/Seo';
import { useDetailingData } from '../hooks/detailingData/useDetailingData';
import Hero from '../sections/detailing/Hero';
import Services from '../sections/detailing/Services';
import ContactBaner from '../sections/detailing/ContactBaner';
import AboutIcons from '../sections/AboutIcons';
import Socials from '../sections/homepage/Socials';

const AutoDetailing = () => {
  const detailing = useDetailingData();
  const detailing_rendered = detailing.map( ( element ) => ( { title: element.short_title, id: element.id } ) );
  return (
    <>
      <Seo
        title="Klimfix - Auto Detailing & Car Wrapping"
        description="Oferujemy serwis klimatyzacji samochodowej pielęgnację samochodową, auto detailing oraz car wrapping w Rzeszowie, Łańcucie i Tyczynie"
      />
      <Hero navigation={detailing_rendered} />
      <Services services={detailing} />
      <ContactBaner />
      <AboutIcons withMargin />
      <Socials />
    </>
  )
};

export default AutoDetailing;