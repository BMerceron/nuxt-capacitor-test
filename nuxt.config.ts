export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiHost: 'http://localhost:8050',
      graphqlEntrypoint: '/graphql'
    }
  },

  routeRules: {
    // swr: x ==> the page is generated on first request, then cached for an amount of time x seconds, then revalidated after this amount of time
    // swr: true ==> the page is generated on first request, then cached while a regeneration changes its content
    '/swr': { swr: true },
    // ssr: false ==> client side, classic Vue SPA behavior (bad for SEO)
    '/spa': { ssr: false },
    // prerender: true ==> generated once at build and no cache limit
    '/prerender': { prerender: true }
    // Default behavior ==> generated on client side every-time url is requested (but client-side when navigating)
  },

  modules: ['@nuxtjs/tailwindcss']
});
