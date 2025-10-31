'use strict';

/**
 * blog router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blog.blog');
module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/blogs/search',
      handler: 'blog.search',
      config: {
        auth: false, // set true if you want it protected
      },
    },
  ],
};