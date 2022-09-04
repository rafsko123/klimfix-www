import React         from "react";
import styled        from "styled-components";
import {Section}     from "../../components/layout/Section";
import {Wrapper}     from "../../components/layout/Wrapper";
import {Description} from "../../components/typography/Description";
import {TitleLg}     from "../../components/typography/TitleLg";
import {TitleSm}     from "../../components/typography/TitleSm";


const StyledWrapper = styled(Wrapper)`
    display: flex;
    align-items: center;
`;

const Column = styled.div`
    width: 50%;

    &:nth-child(1) {
        padding-right: 50px;
    }

    &:nth-child(2) {
        padding-right: 60px;
    }
`;

const TextBox = styled.div`
    max-width: 560px;
`;

const StyledTitleSm = styled(TitleSm)`
    margin-bottom: 24px;
`;

const About = () => {
  return (
    <Section>
      <StyledWrapper>
        <Column>
          <TextBox>
            <StyledTitleSm>Nie tylko klimatyzacja!</StyledTitleSm>
            <TitleLg>Stawiamy komfort jazdy na pierwszym miejscu!</TitleLg>
          </TextBox>
        </Column>
        <Column>
          <Description>
            Oferujemy serwis klimatyzacji samochodowej (potocznie nazywany “nabijaniem klimatyzacji”) oraz pielęgnację samochodową w zakresie sprzątania wnętrza auta w Rzeszowie i Tyczynie. Pracujemy na układach z czynnikiem R134a i R1234yf, sprawdzamy szczelność, ozonujemy. Profesjonalnie dbamy o czystość samochodu.
          </Description>
        </Column>
      </StyledWrapper>
    </Section>
  );
};

export default About;
