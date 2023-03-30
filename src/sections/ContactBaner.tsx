import React         from "react";
import styled        from "styled-components";
import ButtonPrimary from "../components/buttons/ButtonPrimary";
import {TitleMd}     from "../components/typography/TitleMd";


const Container = styled.div`
    margin-bottom: 80px;
    margin-top: 48px;
    text-align: center;
`;

const StyledTitleMd = styled(TitleMd)`
    margin-bottom: 36px;
`;

const ContactBaner = () => {
  return (
    <Container>
      <StyledTitleMd>
        Stawiamy komfort jazdy na <br/>pierwszym miejscu!
      </StyledTitleMd>
      <ButtonPrimary href="tel:+48534520569" title="Telefon kontaktowy do KLIMFIX">Zadzwoń</ButtonPrimary>
    </Container>
  );
};

export default ContactBaner;
