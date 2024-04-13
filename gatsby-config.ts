import type { GatsbyConfig } from "gatsby";


const path = require( "path" );
require( "dotenv" ).config();

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Klimfix`,
    siteUrl: `https://klimfix.pl/`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-layout`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 300,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-NS8ZMRV",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Klimfix`,
        short_name: `Klimfix`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#00C9FF`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins\:200,300,400,500,600,700,800,900`,
          `Mitr\:200,300,400,500,600,700,800,900`,

        ],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${ __dirname }/src/assets`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        assets: path.join( __dirname, "src/assets" ),
        src: path.join( __dirname, "src" ),
        pages: path.join( __dirname, "src/pages" ),
        components: path.join( __dirname, "src/components" ),
        shared: path.join( __dirname, "src/shared" ),
        sections: path.join( __dirname, "src/sections" ),
      },
    },
    {
      resolve: "gatsby-plugin-htaccess",
      options: {
        https: true,
        www: false,
      },
    },
    {
      resolve: "gatsby-plugin-cookiebot",
      options: {
        cookiebotId: "654aac0b-651e-41de-9ed0-5c45afc0e574",
        manualMode: true,
        blockGtm: false,
        includeInDevelopment: true,
        pluginDebug: true,
      },
    },
  ],
};

export default config;
