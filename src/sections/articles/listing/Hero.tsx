import React         from "react";
import styled        from "styled-components";
import {Wrapper}     from "../../../components/layout/Wrapper";
import {Description} from "../../../components/typography/Description";
import {TitleLg}     from "../../../components/typography/TitleLg";
import {TitleSm}     from "../../../components/typography/TitleSm";
import FaqTabs       from "./FaqTabs";


const StyledWrapper = styled(Wrapper)`
    display: flex;
    margin-bottom: 64px;
`;

const Column = styled.div`
    width: 50%;
`;

const TextBox = styled.div`
    max-width: 560px;
`;

const StyledTitleSm = styled(TitleSm)`
    margin-bottom: 12px;
`;

const StyledDescription = styled(Description)`
    font-weight: 500;
    margin-top: 24px;
    line-height: 1.5;
`;

const Hero = () => {
  return (
    <StyledWrapper>
      <Column>
        <TextBox>
          <StyledTitleSm>FAQ</StyledTitleSm>
          <TitleLg>
            KRÓTKIE PYTANIA, <br/>
            KRÓTKIE ODPOWIEDZI
          </TitleLg>
          <StyledDescription>
            Potrzebujesz więcej informacji? Przewiń w dół, by sprawdzić nasze publikacje!
          </StyledDescription>
        </TextBox>
      </Column>
      <Column>
        <FaqTabs/>
      </Column>
    </StyledWrapper>
  );
};

export default Hero;
