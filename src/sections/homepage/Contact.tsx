import { Link } from "gatsby";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import { Section } from "../../components/layout/Section";
import { Wrapper } from "../../components/layout/Wrapper";
import { TitleLg } from "../../components/typography/TitleLg";
import { TitleSm } from "../../components/typography/TitleSm";
import Img from "gatsby-image";


const StyledSection = styled( Section )`
    position: relative;
    max-width: 1920px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        overflow: hidden;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        width: 100%;
        height: auto;
        margin-bottom: 0;
        flex-direction: column;
    }
`;

const StyledWrapper = styled( Wrapper )`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    height: 100%;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
      flex-direction: column;
      justify-content: center;
    }
`;

const StyledTitleLg = styled( TitleLg )`
    max-width: 400px;
    margin-bottom: 48px;
    flex-shrink: 0;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        margin-bottom: 36px;
        text-align: center;
    }
`;

const TextBox = styled.div`
    position: relative;
    z-index: 2;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 36px;
    }
`;


const ImageBox = styled( Link )`
    display: block;
    height: 100%;
    width: 780px;
    height: 580px;
    position: relative;
    z-index: 2;
    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;

        img {
            object-fit: contain !important;
        }
    }

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        width: 640px;
        height: 440px;
    }
        @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptopSmall }) {
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
        width: 500px;
        height: 300px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        position: relative;
        height: auto;
        width: 100%;
        right: 0;
        padding-left: 0;

        .gatsby-image-wrapper {
            img {
                object-fit: cover !important;
            }
        }
    }
`;

const StyledTitleSm = styled( TitleSm )`
    margin-bottom: 18px;
    text-transform: inherit;

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        margin-bottom: 12px;
    }
`;

const Contact = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <TextBox>
          <StyledTitleSm>Chcemy być blisko Ciebie!</StyledTitleSm>
          <StyledTitleLg>SPRAWDŹ, GDZIE JESTEŚMY</StyledTitleLg>
          <ButtonPrimary to={"/nasze-lokalizacje"} title="Nasze lokalizacje">Nasze lokalizacje</ButtonPrimary>
        </TextBox>
        <ImageBox to={"/nasze-lokalizacje"}>
          <Img fluid={image().service_image_1.childImageSharp.fluid} />
        </ImageBox>
      </StyledWrapper>
    </StyledSection>
  );
};

export const image = () => {
  return useStaticQuery( graphql`
    query {
      service_image_1: file(relativePath: { eq: "images/homepage/map_new.png" }) {
        childImageSharp {
          fluid(maxWidth: 788, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};

export default Contact;
