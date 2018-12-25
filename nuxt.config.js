const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid:  'description', name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#ffffff' },
      { name: 'msapplication-TileColor', content: '#2d89ef' },
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-3.3.1.min.js', type: 'text/javascript' },
      { src: 'plugins/imagesloaded.pkgd.min.js', type: 'text/javascript' },
      { src: 'plugins/owl.carousel.min.js', type: 'text/javascript' },
      { src: 'plugins/masonry.pkgd.min.js', type: 'text/javascript' },
      { src: 'js/navigation.js', type: 'text/javascript' },
      { src: 'js/skip-link-focus-fix.js', type: 'text/javascript' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700|Oswald:700'},

      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
      { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: "#2d89ef" },
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    // CSS file in the project
    '@/assets/css/font-awesome.css',
    '@/assets/css/owl.carousel.css',
    '@/assets/css/owl.theme.css',
    '@/assets/css/skin.less',
    '@/assets/css/style.less',
    '@/assets/css/variables.less'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    // '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    // 'nuxtent'
    'nuxtent' // configured in nuxtdown.config.js
  ],



  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    // extend(config, ctx) {
    //   // Run ESLint on save
    //   // if (ctx.isDev && ctx.isClient) {
    //   //   config.module.rules.push({
    //   //     enforce: 'pre',
    //   //     test: /\.(js|vue)$/,
    //   //     loader: 'eslint-loader',
    //   //     exclude: /(node_modules)/
    //   //   })
    //   // }
    // }
  }
}
