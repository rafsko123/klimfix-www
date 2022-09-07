import React     from "react";
import styled    from "styled-components";
import {TitleLg} from "../../components/typography/TitleLg";
import {TitleSm} from "../../components/typography/TitleSm";

const StyledTitleSm = styled(TitleSm)`
    text-decoration: inherit;
    margin-bottom: 18px;
`

const Hero = () => {
  return (
    <div>
      <StyledTitleSm>Nie tylko klimatyzacja!</StyledTitleSm>
      <TitleLg as="h1">
        SPRAWDŹ, <br/>
        GDZIE JESTEŚMY
      </TitleLg>
    </div>
  );
};

export default Hero;
