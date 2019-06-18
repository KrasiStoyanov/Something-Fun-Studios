/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    /* Your site config here */
    siteMetadata: {
        title: "Something Fun Studios",
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-catch-links",
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: `872wp7p7fdp7`,
                accessToken: `CBZmVfOKntH2L7oXhPAW2JB0rjahlqlFcPQsuUSPT3k`,
            },
        },
        "gatsby-plugin-sass",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "src",
                path: `${__dirname}/src/`,
            },
        },
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    "gatsby-remark-relative-images",
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1140,
                            linkImagesToOriginal: false,
                        },
                    },
                    {
                        resolve: "gatsby-remark-embed-youtube",
                        options: {
                            width: 800,
                            height: 400,
                        },
                    },
                    `gatsby-remark-responsive-iframe`,
                ],
            },
        },
    ],
};
