const colors = require('vuetify/es5/util/colors').default

module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'theme-color', content: '#04c0ff' },
      // Twitter card
      { name: 'twitter:card', content: 'summary' },
      {
        name: 'twitter:site',
        content: 'https://www.twitter.com/StanleyMasinde_'
      },
      { name: 'twitter:title', content: 'Covid_19 Kenya' },
      {
        name: 'twitter:description',
        content: process.env.npm_package_description
      },
      // Your twitter handle, if you have one.
      { name: 'twitter:creator', content: '@StanleyMasinde_' },
      {
        name: 'twitter:image:src',
        content: 'https://covid19kenya.ml/images/infected.png'
      },

      // Google / Schema.org markup:
      { itemprop: 'name', content: 'Covid_19 Kenya' },
      { itemprop: 'description', content: process.env.npm_package_description },
      {
        itemprop: 'image',
        content: 'https://covid19kenya.ml/images/infected.png'
      }
    ],
    link: [{ rel: 'manifest', href: '/manifest.json' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: false,
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: '#04c0ff',
          accent: colors.grey.darken3,
          secondary: '#ff4f04',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: '#04c0ff',
          accent: colors.grey.darken3,
          secondary: '#ff4f04',
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
