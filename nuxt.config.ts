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
        { name: 'keywords', content: 'OSE, open source, community, volunteers, programming, projects, development' },
        { name: 'author', content: 'OSE' },
        { property: 'og:title', content: 'OSE - Open Source Community' },
        { property: 'og:url', content: 'https://www.ose.web.id' },
        { property: 'og:description', content: 'A community of volunteers with a passion for creation—both individually and through open source projects' },
        { property: 'og:image', content: '/img/ose-og-image.jpg' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
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
