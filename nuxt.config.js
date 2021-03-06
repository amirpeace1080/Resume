export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'محمد شریفی',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" },
      { rel:"stylesheet", href:"https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v[X.Y.Z]/dist/font-face.css"}
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "./assets/main/style.css"
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    'bootstrap-vue/nuxt'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
