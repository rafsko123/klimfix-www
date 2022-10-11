import {graphql, useStaticQuery} from "gatsby";


export const useHeroSliderImage = () => {
  return useStaticQuery(graphql`
    query {
      slide_1: file(relativePath: { eq: "images/homepage/hero-slide-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide_2: file(relativePath: { eq: "images/homepage/hero-slide-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide_3: file(relativePath: { eq: "images/homepage/hero-slide-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide_mobile_1: file(relativePath: { eq: "images/homepage/hero-slide-mobile-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide_mobile_2: file(relativePath: { eq: "images/homepage/hero-slide-mobile-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      slide_mobile_3: file(relativePath: { eq: "images/homepage/hero-slide-mobile-3.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};
