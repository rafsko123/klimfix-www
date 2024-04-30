import { graphql, useStaticQuery } from "gatsby";


export const useDetailingImage = () => {
  return useStaticQuery( graphql`
    query {
      service_1: file(relativePath: { eq: "images/detailing/service1.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service_2: file(relativePath: { eq: "images/detailing/service2.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service_3: file(relativePath: { eq: "images/detailing/service3.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service_4: file(relativePath: { eq: "images/detailing/service4.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service_5: file(relativePath: { eq: "images/detailing/service5.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service_6: file(relativePath: { eq: "images/detailing/service6.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service_7: file(relativePath: { eq: "images/detailing/service7.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service_8: file(relativePath: { eq: "images/detailing/service8.png" }) {
        childImageSharp {
          fluid(maxWidth: 750, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};
