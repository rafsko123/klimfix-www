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
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        flex-wrap: wrap;
        align-items: flex-start;
    }
`;

const Column = styled.div`
    width: 50%;

    &:nth-child(1) {
        padding-right: 50px;
    }

    &:nth-child(2) {
        padding-right: 60px;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        &:nth-child(1) {
            padding-right: 40px;
        }

        &:nth-child(2) {
            padding-right: 40px;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
        &:nth-child(1) {
            padding-right: 0;
            margin-bottom: 36px;
        }

        &:nth-child(2) {
            padding-right: 0
        }
    }
`;

const TextBox = styled.div`
    max-width: 560px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        max-width: 480px;
    }
`;

const StyledTitleSm = styled(TitleSm)`
    margin-bottom: 18px;
    text-transform: inherit;

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-bottom: 12px;
    }
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
