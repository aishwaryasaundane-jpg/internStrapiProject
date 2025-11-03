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
      path: '/blogs',
      handler: 'blog.find',
      config: {
        auth: false,
      },
    },
    {
      method: 'GET',
      path: '/blogs/:id',   
      handler: 'blog.findOne', 
      config: {
        auth: false, 
      },
    },
    {
      method: 'GET',
      path: '/blogs/search',
      handler: 'blog.search',
      config: {
        auth: false, 
      },
    },
   
  ],
};