module.exports = {
  siteMetadata: {
    title: "Gpan",
  },
  plugins: [
    
    {
      resolve: `gatsby-theme-blog`,
      options: {
        
          prismPreset: `dracula`,
          preset: false,
        
        // basePath defaults to `/`
        basePath: `/blog`,
        mdxOtherwiseConfigured: true,
        contentPath: `./content/posts`
        
      },
    },
    {
      resolve: `@lekoarts/gatsby-theme-cara`,
      options: {
        // basePath defaults to `/`
        basePath: `/`,
      },
    },
    {
      resolve: `gatsby-theme-gallery`,
      options: {        
       
        basePath: `/galleria`,
        
        // basePath defaults to `/`
        
        
      },
    },
  
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
