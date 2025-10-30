'use strict';

/**
 * blog controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::blog.blog', ({ strapi }) => ({

  async list(ctx) {
    try {
      const { category, search } = ctx.query;
      const filters = {};

      if (category) {
        filters.blog_categories = { title: { $eq: category } };
      }

      if (search) {
        filters.$or = [
          { title: { $containsi: search } },
          { content: { $containsi: search } },
        ];
      }

      const blogs = await strapi.db.query('api::blog.blog').findMany({
        where: filters,
        populate: {
          blog_categories: true,
          image: true,
          image_mobile: true,
          socialIcons: true,
        },
        orderBy: { publish_date: 'desc' },
      });

      ctx.body = blogs;
    } catch (error) {
      strapi.log.error('Error fetching blogs:', error);
      ctx.throw(500, 'Internal server error');
    }
  },

}));
