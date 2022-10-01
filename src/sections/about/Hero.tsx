import React         from "react";
import styled        from "styled-components";
import {Description} from "../../components/typography/Description";
import {TitleMd}     from "../../components/typography/TitleMd";


const TextColumns = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 36px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        margin-top: 24px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        flex-direction: column;
    }
`;

const TextColumn = styled.div`
    width: calc(50% - 50px);
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        width: calc(50% - 24px);
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
        &:not(:last-child) {
            margin-bottom: 24px;
        }
    }
`;

const Hero = () => {
  return (
    <div>
      <TitleMd as="h1" isWhite>
        Krótko o nas
      </TitleMd>
      <TextColumns>
        <TextColumn>
          <Description isWhite>
            Jesteśmy polską firmą motoryzacyjną działającą na&nbsp;terenie Podkarpacia. Nasza siedziba znajduje się w&nbsp;Rzeszowie. <strong>Zajmujemy się klimatyzacją samochodową oraz pielęgnacją samochodową,</strong> obsługujemy klientów zarówno prywatnych jak i&nbsp;biznesowych.
          </Description>
        </TextColumn>
        <TextColumn>
          <Description isWhite>
            Naszymi usługami zapewniamy wygodną jazdę w&nbsp;czystym, schłodzonym aucie. <strong>Regularnie rozszerzamy naszą ofertę i&nbsp;szkolimy pracowników.</strong> Z&nbsp;wykorzystaniem naszego sprzętu podejmujemy się&nbsp;również
          </Description>
        </TextColumn>
      </TextColumns>
    </div>
  );
};

export default Hero;
