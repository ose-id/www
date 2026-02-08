import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'keywords', content: 'adydetra, Adityawarman, Dewa, Putra, SMKN 1 Jakarta, Frontend Developer, Aptrocode' },
        { name: 'author', content: 'Adityawarman Dewa Putra' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
        { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
      ],
    },
  },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  routeRules: {
    '/': {
      prerender: true,
    },
  },

  components: [
    {
      path: '~/components',
      pathPrefix: false, // Allows <TheHero> instead of <OrganismsTheHero>
      ignore: ['**/variants.ts'],
    },
  ],

  modules: ['@nuxt/image', '@nuxtjs/sitemap'],

  site: {
    url: 'https://www.ose.web.id',
  },

  devtools: {
    enabled: false,
  },

  sitemap: {
    xsl: false,
  },

  runtimeConfig: {
    githubToken: '',
  },

  compatibilityDate: '2025-11-19',
});
