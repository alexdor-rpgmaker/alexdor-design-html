module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Alex d\'Or',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' /* , initial-scale=0.9, shrink-to-fit=no */ },
      { hid: 'description', name: 'description', content: 'Front-end for Alex d&apos;or website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Staatliches' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans%7CStaatliches' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css', integrity: "sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO", crossorigin: "anonymous" },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.6.3/css/all.css', integrity: "sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/", crossorigin: "anonymous" }
    ]
  },
  css: [
    '@/assets/css/style.css'
  ],
  modules: [
    '@nuxtjs/axios',
  ],
  axios: {},
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

