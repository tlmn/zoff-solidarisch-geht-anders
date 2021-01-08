module.exports = {
  siteMetadata: {
    name: "Solidarisch geht anders!",
    title: "Solidarisch geht anders!",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Solidarisch geht anders!`,
        short_name: `Solidarisch geht anders!`,
        start_url: `/`,
        background_color: `#fdd816`,
        theme_color: `#fdd816`,
        display: `standalone`,
        icon: `static/assets/images/sgs-icon.png`,
      },
    },
  ],
};
