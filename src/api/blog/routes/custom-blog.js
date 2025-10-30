module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/blog/list',
      handler: 'api::blog.blog.list',
       config: {
        auth: false,
      },
    },
  ],
};