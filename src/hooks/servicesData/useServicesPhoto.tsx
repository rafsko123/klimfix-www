import {graphql, useStaticQuery} from "gatsby";


export const useServicesPhoto = () => {
  return useStaticQuery(graphql`
    query {
      service_image_1: file(relativePath: { eq: "images/homepage/services-bg-1.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      service_image_2: file(relativePath: { eq: "images/homepage/services-bg-2.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
};
