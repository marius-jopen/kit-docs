import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],

  kit: {
    adapter: adapter(),

    prerender: {
      entries: ['*'],
      handleMissingId: 'warn',
    },
  },

  package: {
    dir: 'client',
    emitTypes: true,
  },
};

export default config;
