import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'docs',
      assets: 'docs',
      // set to '404.html' if you want SPA-style fallback
      fallback: undefined
    })
  }
};

export default config;
