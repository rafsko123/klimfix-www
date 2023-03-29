import {Link}           from "gatsby";
import {useStaticQuery} from "gatsby";
import {graphql}        from "gatsby";
import React            from "react";
import styled           from "styled-components";
import ButtonPrimary    from "../../components/buttons/ButtonPrimary";
import {Section}        from "../../components/layout/Section";
import {Wrapper}        from "../../components/layout/Wrapper";
import {TitleLg}        from "../../components/typography/TitleLg";
import {TitleSm}        from "../../components/typography/TitleSm";
import Img              from "gatsby-image";


const StyledSection = styled(Section)`
    position: relative;
    max-width: 1920px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 700px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        height: 600px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        height: 440px;
        overflow: hidden;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
        height: auto;
        margin-bottom: 36px;
    }
`;

const ImageBox = styled(Link)`
    display: block;
    height: 100%;
    width: 1000px;
    padding-left: 64px;
    position: absolute;
    top: 0;
    right: 15%;
    text-align: right;
    z-index: 2;

    .gatsby-image-wrapper {
        width: 100%;
        height: 100%;

        img {
            object-fit: contain !important;
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        right: 5%;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        right: -240px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletSmall}) {
        right: -300px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        position: relative;
        height: 340px;
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

const StyledWrapper = styled(Wrapper)`
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        flex-wrap: wrap-reverse;
    }
`;

const TextBox = styled.div`
    max-width: 560px;
    position: relative;
    z-index: 2;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const StyledTitleLg = styled(TitleLg)`
    max-width: 400px;
    margin-bottom: 48px;
    flex-shrink: 0;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin-bottom: 36px;
        text-align: center;
    }
`;

const StyledTitleSm = styled(TitleSm)`
    margin-bottom: 18px;
    text-transform: inherit;

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-bottom: 12px;
    }
`;

const Contact = () => {
  return (
    <StyledSection>
      <ImageBox to={"/nasze-lokalizacje"}>
        <Img fluid={image().service_image_1.childImageSharp.fluid}/>
      </ImageBox>
      <StyledWrapper>
        <TextBox>
          <StyledTitleSm>Chcemy być blisko Ciebie!</StyledTitleSm>
          <StyledTitleLg>SPRAWDŹ, GDZIE JESTEŚMY</StyledTitleLg>
          <ButtonPrimary to={"/nasze-lokalizacje"}>Nasze lokalizacje</ButtonPrimary>
        </TextBox>
      </StyledWrapper>
    </StyledSection>
  );
};

export const image = () => {
  return useStaticQuery(graphql`
    query {
      service_image_1: file(relativePath: { eq: "images/homepage/map3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1100, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};

export default Contact;
