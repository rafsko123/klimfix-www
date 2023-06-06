import { HeadFC } from "gatsby";
import React from "react";
import styled from "styled-components";
import SubpageContainer from "../components/layout/SubpageContainer";
import { Wrapper } from "../components/layout/Wrapper";
import Seo from "../components/Seo";
import { TitleMd } from "../components/typography/TitleMd";
import AboutIcons from "../sections/AboutIcons";
import ContactBaner from "../sections/ContactBaner";
import PriceList from "../sections/priceList/priceList";

const StyledWrapper = styled(Wrapper)`
  max-width: 1200px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    max-width: 1024px;
  }
`;

const StyledTitleMd = styled(TitleMd)`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.phoneBig}) {
    text-align: center;
    width: 100%;
  }
`;

const PriceListPage = () => {
  return (
    <>
      <Seo
        title="USŁUGI I CENNIK"
        description="Oferujemy serwis klimatyzacji samochodowej pielęgnację samochodową, auto detailing oraz car wrapping w Rzeszowie, Łańcucie i Tyczynie."
      />
      <SubpageContainer>
        <StyledWrapper>
          <StyledTitleMd as="h1">Usługi i cennik</StyledTitleMd>
          <PriceList />
          <AboutIcons />
          <ContactBaner />
        </StyledWrapper>
      </SubpageContainer>
    </>
  );
};

export default PriceListPage;
