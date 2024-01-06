const colors = require('vuetify/es5/util/colors').default

module.exports = {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
    link: [{ rel: 'stylesheet', href: '/app.css' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#04c0ff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
    '@nuxtjs/moment'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyDWE0XiymFVPgjMwKWCVQziv0hvC0Eis-g',
          authDomain: 'covid-19kenya.firebaseapp.com',
          databaseURL: 'https://covid-19kenya.firebaseio.com',
          projectId: 'covid-19kenya',
          storageBucket: 'covid-19kenya.appspot.com',
          messagingSenderId: '1021366242762',
          appId: '1:1021366242762:web:f25550440d283d9fdf9333',
          measurementId: 'G-FQHBN20J3E'
        },
        services: {
          auth: false,
          firestore: false,
          functions: false,
          storage: false,
          realtimeDb: false,
          messaging: {
            createServiceWorker: true
          },
          performance: true,
          analytics: true,
          remoteConfig: false
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  pwa: {
    meta: {
      name: 'Covid_19 Kenya',
      short_name: 'Covid19Kenya',
      ogImage: '/infected.png'
    },
    workbox: {
      offlineAnalytics: true,
      runtimeCaching: [
        'https://twitter.covid19kenya.site/twitter/MOH_kenya/recent',
        'https://corona.lmao.ninja/v2/countries/kenya'
      ]
    }
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: false,
    theme: {
      dark: true,
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
