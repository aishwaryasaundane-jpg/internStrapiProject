'use strict';

module.exports = (config, { strapi }) => {
  return async (ctx, next) => {
    if (ctx.request.url.includes('/upload') && ctx.request.method === 'POST') {

      const files = ctx.request.files?.files || ctx.request.files?.file;

      if (!files) {
        ctx.status = 400;
        ctx.body = { error: 'No file uploaded' };
        return;
      }
      const fileArray = Array.isArray(files) ? files : [files];
      for (const file of fileArray) {
        const mimeType = file.mimetype || file.type;
        if (mimeType !== 'image/webp') {
          ctx.status = 400;
          ctx.body = { error: `Only WebP images are allowed. Invalid file: ${file.originalFilename}` };
          return;
        }
      }
      await new Promise((res) => setTimeout(res, 150));
    }
      
    await next();
  };
};
