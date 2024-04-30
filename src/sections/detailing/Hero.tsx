import React from "react";
import styled from "styled-components";
import { Wrapper } from "../../components/layout/Wrapper";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import ButtonPrimary from "../../components/buttons/ButtonPrimary";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const Container = styled.div`
    max-width: 2560px;
    width: 100%;
    height: 100vh;
    min-height: 635px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        min-height: 535px;
    }
`

const ImageBox = styled.div`
    position: relative;
    height: 100%;
    .gatsby-image-wrapper {
        height: 100%;
    }
`;

const ShadowBox = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    height: 100%;
    .gatsby-image-wrapper {
        height: 100%;
        width: 100%;
        img {
            object-fit: cover !important;
        }
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        background-color: rgba(0, 51, 112, 0.4);
    }
`

// @ts-ignore
const StyledWrapper = styled( Wrapper )`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    z-index: 3;
    padding-top: calc(80px + 48px);
    padding-bottom: calc(80px + 68px);
    display: flex;
    align-items: center;
    h1 {
        font-size: 64px;
        color: #fff;
        font-weight: 500;
        line-height: 1.1;
    }
    p {
        color: #fff;
        margin-top: 30px;
        font-weight: 300;
        font-size: 20px;
        max-width: 700px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        h1 {
            font-size: 54px;
        }
        p {
            font-size: 16px;
            max-width: 550px;

        }
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        padding-top: calc(80px + 0px);
        h1 {
            font-size: 32px;
        }
        p {
            margin-top: 18px;
            font-size: 14px;
        }
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
        align-items: center;
        padding: 80px 24px;
    }
    @media screen and (max-width: 430px) {
        text-align: center;
        h1 {
            font-size: 28px;
        }
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    margin-top: 60px;
    a {
        height: 70px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
     a {
        height: 60px;
     }
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tabletBig }) {
        margin-top: 36px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        a {
            height: 40px;
            font-size: 12px;
        }
    }
    @media screen and (max-width: 430px) {
     justify-content: center;
    }
`

const ScrollButton = styled( AnchorLink )`
    margin-left: 60px;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #fff;
    color: #fff;
    font-size: 16px;
    text-transform: uppercase;
    font-weight: 400;
    transition: .3s all ease;
    height: auto !important;
    cursor: pointer;
    font-family: ${ ( { theme } ) => theme.fontFamily.secondary };
    letter-spacing: .4px;
    span {
        display: inline-block;
        margin-right: 13px;
        padding-bottom: 8px;
    }
    &:hover {
        color: #00C9FF;
        border-color: #00C9FF;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        margin-left: 50px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.phoneBig }) {
        font-size: 12px;
        border-width: 1px;
        margin-left: 24px;
        svg {
            width: 12px;
            height: 12px;
        }
    }
    @media screen and (max-width: 430px) {
        margin-left: 0;
        margin-top: 18px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 36px;
}
`

const ServicesMenu = styled.div`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 48px);
    height: calc(80px + 48px);

    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        height: calc(80px + 30px);
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.tablet }) {
        display: none;
    }
`

const StyledAnchorLink = styled( AnchorLink )`
    font-size: 18px;
    text-transform: uppercase;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    margin-bottom: 16px;
    font-family: ${ ( { theme } ) => theme.fontFamily.secondary };
    color: #fff;
    cursor: pointer;
    line-height: 200%;
    transition: .3s border-color ease;
    display: inline-block;
    &:hover {
        border-color: #fff;
    }
    &:not(:last-child) {
        margin-right: 68px;
    }
    @media screen and (max-width: ${ ( { theme } ) => theme.breakpoints.laptop }) {
        font-size: 16px;
        margin-bottom: 12px;
        &:not(:last-child) {
            margin-right: 50px;
        }
    }
`

const Hero = ( { navigation }: { navigation: { title: string, id: string }[] } ) => {
    return (
        <Container>
            <ImageBox>
                <Img fluid={image().hero.childImageSharp.fluid} />
                <ShadowBox>
                    <Img fluid={image().shadow.childImageSharp.fluid} />
                </ShadowBox>
            </ImageBox>
            <StyledWrapper>
                <div>
                    <h1>AUTO DETAILING <br />& CAR WRAPPING</h1>
                    <p>
                        Od drobnych szczegółów do całościowej metamorfozy.
                        Zobacz&nbsp;prawdziwą różnicę i podkreśl design swojego samochodu!
                    </p>
                    <Buttons>
                        <ButtonPrimary href="tel:48534520569" title="Zadzwoń do KLIMFIX">Zarezerwuj wizytę</ButtonPrimary>
                        <ScrollButton to="/auto-detailing-car-wrapping#content">
                            <span>Dowiedz się więcej</span>
                            <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 7.92578L5.75 11.9999L10 7.92578" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M5.75 1V11.1852" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </ScrollButton>
                    </Buttons>
                </div>
                <ServicesMenu>
                    {
                        navigation.map( ( element, index ) => (
                            <StyledAnchorLink stripHash to={`#${ element.id }`} key={index}>{element.title}</StyledAnchorLink>
                        ) )
                    }
                </ServicesMenu>
            </StyledWrapper>
        </Container>
    );
};

export const image = () => {
    return useStaticQuery( graphql`
    query {
      hero: file(relativePath: { eq: "images/detailing/hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
        shadow: file(relativePath: { eq: "images/detailing/shadow.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};

export default Hero;
