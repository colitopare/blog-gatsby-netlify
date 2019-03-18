module.exports = {
  siteMetadata: {
    title: `Hardcoders`,
    description: `Mes premiers pas avec Hardcoders, pour la création d'un blog`,
    author: `Muriel`,
    bio: `Je suis développeur junior à la recherche d'un premier emploi`,
    authorImage: 'https://cv.muriel-imbert.fr/images/identite.jpg'
  },
  plugins: [
    { // permet de récupérer les sources stockées dans le dossier blog
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    // Permet de transformer les fichiers markdown en données 
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-less`,
      options: {
        modifyVars: require("./src/theme/antd.js"),
        // Needed to load antdesign less files
        javascriptEnabled: true,
      },
    }, {
      resolve: `gatsby-plugin-antd`,
      options: {
        // Activate less file
        style: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
