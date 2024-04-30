import React from "react";
import styled from "styled-components";
import AboutIconCard from "../components/about-icon-card/AboutIconCard";
import { Section } from "../components/layout/Section";
import { Wrapper } from "../components/layout/Wrapper";
import { DataAboutIcons } from "../data/DataAboutIcons";


const StyledWrapper = styled( Wrapper ) <{ withMargin?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${ props => props.withMargin ? "100px" : "0" };
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
      margin-bottom: ${ props => props.withMargin ? "60px" : "0" };
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
      flex-direction: column;
      margin-bottom: ${ props => props.withMargin ? "48px" : "0" };
    }
`;

const AboutIconWrapper = styled.div`
    margin: 0 24px;
    width: 240px;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        width: 180px;
        margin: 0 12px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        flex-direction: column;
        width: 220px;
        &:not(:last-child) {
            margin-bottom: 36px;
        }
    }
`;

const AboutIcons = ( { withMargin }: { withMargin?: boolean } ) => {
  return (
    <Section>
      <StyledWrapper withMargin>
        {
          DataAboutIcons.map( ( element, i ) => (
            <AboutIconWrapper key={i}>
              <AboutIconCard element={element} />
            </AboutIconWrapper>
          ) )
        }
      </StyledWrapper>
    </Section>
  );
};

export default AboutIcons;
