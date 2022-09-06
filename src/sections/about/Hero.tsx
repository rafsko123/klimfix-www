import React         from "react";
import styled        from "styled-components";
import {Description} from "../../components/typography/Description";
import {TitleMd}     from "../../components/typography/TitleMd";

const TextColumns = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 36px;
`;

const TextColumn = styled.div`
    width: calc(50% - 50px);
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
            Jesteśmy polską firmą motoryzacyjną działającą na terenie Podkarpacia. Nasza siedziba znajduje się w Rzeszowie. <strong>Zajmujemy się klimatyzacją samochodową oraz pielęgnacją samochodową,</strong> obsługujemy klientów zarówno prywatnych jak i biznesowych.
          </Description>
        </TextColumn>
        <TextColumn>
          <Description isWhite>
            Naszymi usługami zapewniamy wygodną jazdę w czystym, schłodzonym aucie. <strong>Regularnie rozszerzamy naszą ofertę i szkolimy pracowników.</strong> Z wykorzystaniem naszego sprzętu podejmujemy się również
          </Description>
        </TextColumn>
      </TextColumns>
    </div>
  );
};

export default Hero;
