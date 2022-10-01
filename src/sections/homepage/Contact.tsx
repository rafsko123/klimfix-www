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


const TextBox = styled.div`
    max-width: 560px;
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

const StyledWrapper = styled(Wrapper)`
    display: flex;
    align-items: center;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        flex-wrap: wrap-reverse;
    }
`;

const ImageBox = styled.div`
    height: 500px;
    width: calc(100% - 400px);
    padding-left: 64px;
    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        height: 400px;
        padding-left: 48px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        height: 200px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        width: 100%;
        margin-bottom: 36px;
        padding-left: 0;
        .gatsby-image-wrapper {
            width: 100%;
            height: 100%;
        }
    }
`;

const Contact = () => {
  return (
    <Section>
      <StyledWrapper>
        <TextBox>
          <StyledTitleSm>Chcemy być blisko Ciebie!</StyledTitleSm>
          <StyledTitleLg>SPRAWDŹ, GDZIE JESTEŚMY</StyledTitleLg>
          <ButtonPrimary to={"/nasze-lokalizacje"}>Nasze lokalizacje</ButtonPrimary>
        </TextBox>
        <ImageBox>
          <Img fluid={image().service_image_1.childImageSharp.fluid}/>
        </ImageBox>
      </StyledWrapper>
    </Section>
  );
};

export const image = () => {
  return useStaticQuery(graphql`
    query {
      service_image_1: file(relativePath: { eq: "images/homepage/homepage-map.png" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};

export default Contact;
