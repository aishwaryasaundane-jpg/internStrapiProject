module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/blogs/by-category/:categoryName',
      handler: 'blog.byCategory',
      config: {
        auth: false, 
      },
    },
    
  ],
};