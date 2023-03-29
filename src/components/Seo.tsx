/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React                     from "react";
import PropTypes                 from "prop-types";
import {Helmet}                  from "react-helmet";
import {useStaticQuery, graphql} from "gatsby";
import OGImage                   from "../assets/images/og.png";


interface SeoProps {
  title: string;
  description: string;
  lang?: string;
  meta?: any;
}

function SEO({description, lang, meta, title}: SeoProps) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`KLIMFIX | ${title}`}
      meta={[
        {
          name:    `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content:  title,
        },
        {
          property: `og:description`,
          content:  metaDescription,
        },
        {
          property: `og:type`,
          content:  `website`,
        },
        {
          property: `og:image`,
          content:  OGImage,
        },
        {
          name:    `twitter:card`,
          content: `summary`,
        },
        {
          name:    `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name:    `twitter:title`,
          content: title,
        },
        {
          name:    `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang:        `pl`,
  meta:        [],
  description: ``,
};

SEO.propTypes = {
  image:       PropTypes.string,
  description: PropTypes.string,
  lang:        PropTypes.string,
  meta:        PropTypes.arrayOf(PropTypes.object),
  title:       PropTypes.string.isRequired,
};

export default SEO;
