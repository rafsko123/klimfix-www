import React                 from "react";
import styled                from "styled-components";
import SubpageContainer      from "../components/layout/SubpageContainer";
import {Wrapper}             from "../components/layout/Wrapper";
import {TitleMd}             from "../components/typography/TitleMd";
import AboutIcons            from "../sections/AboutIcons";
import PriceList             from "../sections/priceList/priceList";
import PriceListContactBaner from "../sections/priceList/PriceListContactBaner";


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
        <PriceListContactBaner/>
      </StyledWrapper>
    </SubpageContainer>
  );
};

export default PriceListPage;
