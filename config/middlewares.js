const path = require('path');

module.exports = [
  
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  {
    //name: 'global::webp-check',
    resolve: path.resolve(__dirname, '../src/middlewares/webp-check'),
  },
  'strapi::public',
];
