// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      title: 'Impact Dart League',
      meta: [{
        name: 'Impact Dart League',
        content: 'Impact Dart League',
      }],
      htmlAttrs: {
        lang: 'en',
        style: 'has-navbar-fixed-top',
      },
    },
  },
  css: [
    'bulma',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
});
