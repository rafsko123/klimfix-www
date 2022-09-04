import React            from "react";
import styled           from "styled-components";
import AboutIconCard    from "../components/about-icon-card/AboutIconCard";
import {Section}        from "../components/layout/Section";
import {Wrapper}        from "../components/layout/Wrapper";
import {DataAboutIcons} from "../data/DataAboutIcons";


const StyledWrapper = styled(Wrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AboutIconWrapper = styled.div`
    margin: 0 24px;
    width: 240px;
`;

const AboutIcons = () => {
  return (
    <Section>
      <StyledWrapper>
        {
          DataAboutIcons.map((element, i) => (
            <AboutIconWrapper>
              <AboutIconCard element={element}/>
            </AboutIconWrapper>
          ))
        }
      </StyledWrapper>
    </Section>
  );
};

export default AboutIcons;
