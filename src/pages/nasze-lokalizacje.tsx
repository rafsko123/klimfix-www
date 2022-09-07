import React            from "react";
import SubpageContainer from "../components/layout/SubpageContainer";
import {Wrapper}        from "../components/layout/Wrapper";
import AboutIcons       from "../sections/AboutIcons";
import ContactBaner     from "../sections/ContactBaner";
import Hero             from "../sections/localisation/hero";
import Localisations    from "../sections/localisation/localisations";



const LocalisationsPage = () => {
  return (
    <SubpageContainer>
      <Wrapper>
        <Hero/>
        <Localisations />
        <AboutIcons/>
        <ContactBaner/>
      </Wrapper>
    </SubpageContainer>
  );
};

export default LocalisationsPage;
