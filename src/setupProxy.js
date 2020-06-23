const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(createProxyMiddleware('/api', { 
    target: 'http://47.101.145.49:82',
    changeOrigin:true,
    pathRewrite: {
                "^/api": "/api" // 把/api 变成空
            }
     }));
};

