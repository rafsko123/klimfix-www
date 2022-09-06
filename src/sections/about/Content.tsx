import {graphql}        from "gatsby";
import {useStaticQuery} from "gatsby";
import Img              from "gatsby-image";
import React            from "react";
import styled           from "styled-components";


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
`;

const Content = () => {
  return (
    <div>
      <ImageBox>
        <Img fluid={image().about.childImageSharp.fluid}/>
      </ImageBox>
    </div>
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
