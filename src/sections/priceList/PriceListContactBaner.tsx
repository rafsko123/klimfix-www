import React         from "react";
import styled        from "styled-components";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import {TitleMd}     from "../../components/typography/TitleMd";


const Container = styled.div`
    margin-bottom: 80px;
    margin-top: 48px;
    text-align: center;
`;

const StyledTitleMd = styled(TitleMd)`
    margin-bottom: 36px;
`;

const PriceListContactBaner = () => {
  return (
    <Container>
      <StyledTitleMd>
        Stawiamy komfort<br/>
        jazdy na pierwszym miejscu!
      </StyledTitleMd>
      <ButtonPrimary to={"/"}>Zarezerwuj wizytę</ButtonPrimary>
    </Container>
  );
};

export default PriceListContactBaner;
