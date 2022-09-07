import React                 from "react";
import styled                from "styled-components";
import SubpageContainer      from "../components/layout/SubpageContainer";
import {Wrapper}             from "../components/layout/Wrapper";
import {TitleMd}             from "../components/typography/TitleMd";
import AboutIcons            from "../sections/AboutIcons";
import ContactBaner          from "../sections/ContactBaner";
import PriceList             from "../sections/priceList/priceList";


const StyledWrapper = styled(Wrapper)`
    max-width: 1200px;
`;

const PriceListPage = () => {
  return (
    <SubpageContainer>
      <StyledWrapper>
        <TitleMd as="h1">
          Usługi i cennik
        </TitleMd>
        <PriceList/>
        <AboutIcons/>
        <ContactBaner />
      </StyledWrapper>
    </SubpageContainer>
  );
};

export default PriceListPage;
