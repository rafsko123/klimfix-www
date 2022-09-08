import {graphql}        from "gatsby";
import {useStaticQuery} from "gatsby";
import Img              from "gatsby-image";
import React            from "react";
import styled           from "styled-components";


const Container = styled.div`
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin-left: -24px;
        margin-right: -24px;
    }
`;

const ImageBox = styled.div`
    width: 100%;
    margin-top: 120px;
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 340px;
        background: linear-gradient(180deg, rgba(0, 51, 112, 0) 0%, #003370 100%);
        z-index: 2;
    }

    @media screen and (max-width: ${({theme}) => theme.breakpoints.laptop}) {
        margin-top: 100px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.tabletBig}) {
        margin-top: 80px;
    }
    @media screen and (max-width: ${({theme}) => theme.breakpoints.phoneBig}) {
        margin-top: 36px;
    }
`;

const Content = () => {
  return (
    <Container>
      <ImageBox>
        <Img fluid={image().about.childImageSharp.fluid}/>
      </ImageBox>
    </Container>
  );
};

export const image = () => {
  return useStaticQuery(graphql`
    query {
      about: file(relativePath: { eq: "images/about/about.png" }) {
        childImageSharp {
          fluid(maxWidth: 1200, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};

export default Content;
