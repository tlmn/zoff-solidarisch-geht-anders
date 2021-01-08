module.exports = {
  siteMetadata: {
    name: "Zusammen tun!",
    title: "Zusammen tun!",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
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
        name: `Zusammen tun!`,
        short_name: `Zusammen tun!`,
        start_url: `/`,
        background_color: `#fdd816`,
        theme_color: `#fdd816`,
        display: `standalone`,
        icon: `static/assets/images/sgs-icon.png`,
      },
    },
  ],
};
