import React            from "react";
import SubpageContainer from "../components/layout/SubpageContainer";
import {Wrapper}        from "../components/layout/Wrapper";
import Seo              from "../components/Seo";
import AboutIcons       from "../sections/AboutIcons";
import ContactBaner     from "../sections/ContactBaner";
import Hero             from "../sections/localisation/hero";
import Localisations    from "../sections/localisation/localisations";


const LocalisationsPage = () => {
  return (
    <>
      <Seo title="Lokalizacje" description="Oferujemy serwis klimatyzacji samochodowej pielęgnację samochodową, auto detailing oraz car wrapping w Rzeszowie i Tyczynie."/>
      <SubpageContainer>
        <Wrapper>
          <Hero/>
          <Localisations/>
          <AboutIcons/>
          <ContactBaner/>
        </Wrapper>
      </SubpageContainer>
    </>
  );
};

export default LocalisationsPage;
