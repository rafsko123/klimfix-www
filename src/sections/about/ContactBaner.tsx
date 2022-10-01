import React         from "react";
import styled        from "styled-components";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import {Description} from "../../components/typography/Description";
import {TitleMd}     from "../../components/typography/TitleMd";


const Container = styled.div`
    text-align: center;
    margin: 120px auto 0 auto;
`;

const StyledDescription = styled(Description)`
    margin: 24px 0;
`;

const ContactBaner = () => {
  return (
    <Container>
      <TitleMd isWhite>
        CHCESZ Z NAMI<br/>WSPÓŁPRACOWAĆ?
      </TitleMd>
      <StyledDescription isWhite>
        Jesteśmy otwarci na propozycje współpracy. <br/>Napisz do nas lub zadzwoń!
      </StyledDescription>
      <ButtonPrimary to="/kontakt">
        SKONTAKTUJ SIĘ Z NAMI
      </ButtonPrimary>
    </Container>
  );
};

export default ContactBaner;
