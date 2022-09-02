import type {GatsbyConfig} from "gatsby";

const path = require("path");
require("dotenv").config();

const config: GatsbyConfig = {
  siteMetadata: {
    title:   `Klimfix`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins:        [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Klimfix`,
        short_name: `Klimfix`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#00C9FF`,
        display: `standalone`,
        icon: `src/assets/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts:   [
          `Poppins\:200,300,400,600,700,800,900`,
          `Mitr\:200,300,400,600,700,800,900`,

        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets:     path.join(__dirname, "src/assets"),
        src:        path.join(__dirname, "src"),
        pages:      path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components"),
        shared:     path.join(__dirname, "src/shared"),
        sections:   path.join(__dirname, "src/sections"),
      },
    },
  ],
};

export default config;
