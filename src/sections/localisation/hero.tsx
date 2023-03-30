import React     from "react";
import styled    from "styled-components";
import {TitleLg} from "../../components/typography/TitleLg";
import {TitleSm} from "../../components/typography/TitleSm";


const StyledTitleSm = styled(TitleSm)`
    text-decoration: inherit;
    margin-bottom: 18px;
    text-transform: inherit;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-bottom: 12px;
    }
`;

const Hero = () => {
  return (
    <div>
      <StyledTitleSm as="h1">Nie tylko klimatyzacja!</StyledTitleSm>
      <TitleLg as="h2">
        SPRAWDŹ, <br/>
        GDZIE JESTEŚMY
      </TitleLg>
    </div>
  );
};

export default Hero;
