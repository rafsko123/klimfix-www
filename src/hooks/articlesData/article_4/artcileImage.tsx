import {graphql, useStaticQuery} from "gatsby";


export const ArticleImage = () => {
  const images = useStaticQuery(graphql`
    query {
      hero: file(
        relativePath: {
          eq: "images/articles/article-4/hero.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      list: file(
        relativePath: {
          eq: "images/articles/article-4/list.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 500, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      },
      full: file(
        relativePath: {
          eq: "images/articles/article-4/full.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 940, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return images;
};
