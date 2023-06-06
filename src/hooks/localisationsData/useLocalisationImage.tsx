import { graphql, useStaticQuery } from "gatsby";

export const useLocalisationImage = () => {
  return useStaticQuery(graphql`
    query {
      localisation_1: file(
        relativePath: { eq: "images/localisations/localisation-1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      localisation_2: file(
        relativePath: { eq: "images/localisations/localisation-2.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      localisation_3: file(
        relativePath: { eq: "images/localisations/localisation-3.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      localisation_4: file(
        relativePath: { eq: "images/localisations/localisation-4.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};
