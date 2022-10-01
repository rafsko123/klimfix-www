import {graphql}        from "gatsby";
import {useStaticQuery} from "gatsby";
import Img              from "gatsby-image";
import React            from "react";
import styled           from "styled-components";
import {Section}        from "../../components/layout/Section";
import {Wrapper}        from "../../components/layout/Wrapper";
import {Description}    from "../../components/typography/Description";
import {TitleLg}        from "../../components/typography/TitleLg";

import FBIcon        from "../../assets/icons/fb_white.svg";
import IGIcon        from "../../assets/icons/ig_white.svg";
import WatermarkIcon from "../../assets/icons/watermark.svg";
import {DataSocials} from "../../data/DataSocials";


const StyledSection = styled(Section)`
    display: flex;
    background-color: ${({theme}) => theme.colors.secondary};
    padding: 0;
    position: relative;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletSmall}) {
        flex-wrap: wrap-reverse;
    }
`;

const Column = styled.div`
    width: 50%;

    &.column-text {
        background-image: url(${WatermarkIcon});
        background-repeat: no-repeat;
        background-position: right top;
        position: relative;

        &:after {
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 50%;
            z-index: 2;
            background-image: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, rgba(60, 191, 240, 0.81) 100%);
            background-repeat: no-repeat;
            transform: rotate(180deg);
        }

        @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
            &:after {
                height: 70%;
            }
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletSmall}) {
        width: 100%;
    }
`;

const StyledWrapper = styled(Wrapper)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletSmall}) {
        position: relative;
        transform: none;
        top: 0;
        left: 0;
    }

`;

const TextBox = styled.div`
    max-width: 560px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        max-width: 480px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        max-width: 400px;
        width: 100%;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        max-width: 300px;
        padding-top: 24px;
    }
`;

const ImageBox = styled.div`
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50%;
        z-index: 2;
        background-image: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, #003370 92.46%);
        background-repeat: no-repeat;
    }
`;

const StyledTitleLg = styled(TitleLg)`
    color: #fff;
    line-height: 1.2;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        font-size: 40px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        font-size: 34px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        font-size: 28px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: 20px;
    }
`;

const StyledDescription = styled(Description)`
    color: #fff;
    line-height: 1.5;
    margin: 24px 0 48px 0;
    font-weight: 500;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        margin: 24px 0 36px 0;
    }
`;

const SocialsButtons = styled.div`
    color: #fff;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }
`;

const SocialButton = styled.a`
    color: #fff;
    display: inline-flex;
    align-items: center;
    font-size: 14px;
    padding: 16px 36px;
    line-height: 1;
    white-space: nowrap;
    transition: .3s background-color ease;

    img {
        margin-right: 14px;
        width: 18px;
        height: 18px;
    }

    &:not(:last-child) {
        margin-right: 24px;
    }

    &.facebook-link {
        background-color: #1A69E0;

        &:hover {
            background-color: #175EC9;
        }
    }

    &.instagram-link {
        background-color: #E71C89;

        &:hover {
            background-color: #CF197B;
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        padding: 12px 24px;
        &:not(:last-child) {
            margin-right: 18px;
        }

        img {
            width: 14px;
            height: 14px;
            margin-right: 10px;
        }
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptopSmall}) {
        padding: 12px 18px;
        font-size: 12px;
        &:not(:last-child) {
            margin-right: 12px;
        }

        img {
            width: 12px;
            height: 12px;
            margin-right: 10px;
        }
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        width: 200px;
        justify-content: center;
        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 10px;
        }
    }
`;

const Socials = () => {
  return (
    <StyledSection>
      <StyledWrapper>
        <TextBox>
          <StyledTitleLg>Najświeższe informacje na naszych profilach</StyledTitleLg>
          <StyledDescription>
            Informacje o dniach otwarcia, aktualności
            z wydarzeń firmowych, ciekawostki i dawka
            motoryzacyjnego humoru.
          </StyledDescription>
          <SocialsButtons>
            <SocialButton href={DataSocials.facebook} rel="noopener" target="_blank" className="facebook-link">
              <img src={FBIcon} alt=""/>
              Polub na Facebook’u!
            </SocialButton>
            <SocialButton href={DataSocials.instagram} rel="noopener" target="_blank" className="instagram-link">
              <img src={IGIcon} alt=""/>
              Zaobserwuj na IG!
            </SocialButton>
          </SocialsButtons>
        </TextBox>
      </StyledWrapper>
      <Column className="column-text"/>
      <Column>
        <ImageBox>
          <Img fluid={image().service_image_1.childImageSharp.fluid}/>
        </ImageBox>
      </Column>
    </StyledSection>
  );
};

export const image = () => {
  return useStaticQuery(graphql`
    query {
      service_image_1: file(relativePath: { eq: "images/homepage/homepage-socials.png" }) {
        childImageSharp {
          fluid(maxWidth: 960, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};

export default Socials;

