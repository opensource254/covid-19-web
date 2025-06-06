export default defineNuxtConfig({
  /*
   ** Headers of the page
   */
  app: {
    head: {
      titleTemplate: '%s - Covid_19 Kenya',
      title: 'Covid_19 Kenya',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:image', content: '/infected.png' } // Added og:image
      ],
      link: []
    }
  },
  /*
   ** Customize the progress-bar color
   */
  // loading: { color: '#04c0ff' }, // Nuxt 3 handles loading differently
  /*
   ** Global CSS
   */
  css: ['~/assets/css/app.css'], // Added app.css here
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/ga.client.js', mode: 'client' }], // Updated path after rename
  /*
   ** Nuxt.js dev-modules
   */
    /*
   ** Nuxt.js modules
   */
  modules: [
    'vuetify-nuxt-module',
    '@vite-pwa/nuxt', // Added
    'nuxt-vuefire', // Added nuxt-vuefire
  ],
  vuefire: {
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
    auth: {
      enabled: false // Based on old config: services.auth: false
    },
    // Assuming other services like firestore, functions, storage, realtimeDb are off by default if not specified
    // or need to be explicitly disabled if nuxt-vuefire enables them by default.
    // For nuxt-vuefire, usually you enable what you need.
    // So, not listing firestore, functions, storage, realtimeDb means they are effectively disabled.
    // Explicitly disabling remoteConfig as it was false in the old config.
    // appCheck, firestore, functions, database (realtimeDb), storage are other services that can be enabled.
    services: {
      messaging: {
        enabled: true,
        // Note: createServiceWorker: true from old config is not a direct nuxt-vuefire option.
        // A manual firebase-messaging-sw.js in /public will likely be needed.
      },
      performance: {
        enabled: true,
      },
      analytics: {
        enabled: true,
      }
      // remoteConfig: { enabled: false } // nuxt-vuefire might not have a direct toggle for remoteConfig in this structure
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  // axios: {}, // Removed
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Covid_19 Kenya',
      short_name: 'Covid19Kenya',
      theme_color: '#04c0ff', // Assuming primary color can be theme_color
      icons: [ // Example icons, ogImage not typically part of manifest icons directly
        {
          src: 'icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'], // Replaces offlineAnalytics
      runtimeCaching: [
        {
          urlPattern: ({ url }) => url.pathname.startsWith('https://twitter.covid19kenya.site/twitter/MOH_kenya/recent'),
          handler: 'CacheFirst' as const,
          options: {
            cacheName: 'twitter-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ url }) => url.pathname.startsWith('https://corona.lmao.ninja/v2/countries/kenya'),
          handler: 'NetworkFirst' as const,
          options: {
            cacheName: 'api-cache',
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
    },
    devOptions: {
      enabled: true, // Enable PWA dev options
      type: 'module',
    },
  },
  /*
   ** vuetify module configuration for vuetify-nuxt-module
   */
  vuetify: {
    /* module options */
    moduleOptions: {
      treeshaking: true,
      useIconCDN: false, // Use local @mdi/font
      styles: 'sass'
    },
    /* vuetify options */
    vuetifyOptions: {
      icons: { // Explicitly define MDI as the default icon set
        defaultSet: 'mdi',
      },
      theme: {
        defaultTheme: 'dark',
        themes: {
          dark: {
            colors: {
              primary: '#04c0ff',
              accent: 'grey-darken-3',
              secondary: '#ff4f04',
              info: 'teal-lighten-1',
              warning: 'amber-base',
              error: 'deep-orange-accent-4',
              success: 'green-accent-3'
            }
          },
          light: {
            colors: {
              primary: '#04c0ff',
              accent: 'grey-darken-3',
              secondary: '#ff4f04',
              info: 'teal-lighten-1',
              warning: 'amber-base',
              error: 'deep-orange-accent-4',
              success: 'green-accent-3'
            }
          }
        }
      },
      // If assets/variables.scss contains SASS variables like $primary: #yourcolor;
      // these are typically made available globally or through Vuetify's SASS variables.
      // The `styles: { configFile: 'assets/variables.scss' }` is the more direct way
      // if `vuetify-nuxt-module` passes it to `vite-plugin-vuetify`.
      // For now, let's ensure `assets/variables.scss` is correctly referenced.
      // The module might pick up `~/assets/scss/variables.scss` by convention for SASS variables.
      // Let's try to be explicit with vite-plugin-vuetify options if possible.
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/variables.scss";' // Changed from @use to @import
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
    // @ts-ignore
    extend(config, ctx) {}
  }
})
