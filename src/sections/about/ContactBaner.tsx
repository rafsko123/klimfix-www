import React         from "react";
import styled        from "styled-components";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import {Description} from "../../components/typography/Description";
import {TitleMd}     from "../../components/typography/TitleMd";


const Container = styled.div`
    max-width: 400px;
    text-align: center;
    margin: 120px auto 0 auto;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        max-width: 280px;
    }
`;

const StyledDescription = styled(Description)`
    margin: 24px 0;

`;

const ContactBaner = () => {
  return (
    <Container>
      <TitleMd isWhite>
        CHCESZ Z NAMI WSPÓŁPRACOWAĆ?
      </TitleMd>
      <StyledDescription isWhite>
        Jesteśmy otwarci na propozycje współpracy. Napisz do nas lub zadzwoń!
      </StyledDescription>
      <ButtonPrimary to="/kontakt">
        SKONTAKTUJ SIĘ Z NAMI
      </ButtonPrimary>
    </Container>
  );
};

export default ContactBaner;
