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
`;

const StyledTitleLg = styled(TitleLg)`
    max-width: 400px;
    margin-bottom: 48px;
    flex-shrink: 0;
`;

const StyledTitleSm = styled(TitleSm)`
    margin-bottom: 24px;
`;

const StyledWrapper = styled(Wrapper)`
    display: flex;
    align-items: center;
`;

const ImageBox = styled.div`
    height: 600px;
    width: calc(100% - 400px);
    padding-left: 64px;
`;

const Contact = () => {
  return (
    <Section>
      <StyledWrapper>
        <TextBox>
          <StyledTitleSm>Chcemy być blisko Ciebie!</StyledTitleSm>
          <StyledTitleLg>SPRAWDŹ, GDZIE JESTEŚMY</StyledTitleLg>
          <ButtonPrimary to={"/"}>Nasze lokalizacje</ButtonPrimary>
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
