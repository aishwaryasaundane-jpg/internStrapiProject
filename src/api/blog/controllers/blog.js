'use strict';

/**
 * blog controller
 */
const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({
  async byCategory(ctx) {
    try {
      const { categoryName } = ctx.params;

      const blogs = await strapi.db.query('api::blog.blog').findMany({
        where: {
          catgeories: {
            title: categoryName, 
          },
        },
        populate: ['catgeories', 'image', 'title'],
      });

      if (!blogs.length) {
        return ctx.notFound('No blogs found for this category');
      }

      ctx.body = blogs;
    } catch (error) {
      console.error('Error in byCategory:', error);
      ctx.internalServerError('Something went wrong');
    }
  },
   async search(ctx) {
    try {
      const { q } = ctx.query; 
      if (!q) {
        return ctx.badRequest('Please provide a search query (?q=baby)');
      }

      const blogs = await strapi.db.query('api::blog.blog').findMany({
        where: {
          $or: [
            {
              title: {
                $containsi: q, 
              },
            },
            {
              content: {
                $containsi: q,
              },
            },
            {
              author_name: {
                $containsi: q,
              },
            },
          ],
        },
        populate: ['image', 'catgeories'], 
      });

      if (!blogs.length) {
        return ctx.notFound('No blogs found matching your search');
      }

      ctx.body = blogs;
    } catch (error) {
      console.error('Error in search controller:', error);
      ctx.internalServerError('Something went wrong');
    }
  },
}));
