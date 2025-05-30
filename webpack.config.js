const fs = require('fs').promises;
const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    proxy: [
      {
        context: ['/api', '/oauth2', '/swagger-ui', '/v3/api-docs'],
        target: 'http://localhost:8080',
      },
    ],
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3030,
    open: true,
    setupMiddlewares: (middlewares, devServer) => {
      
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      middlewares.unshift({
        name: 'custom-headers',
        middleware: (req, res, next) => {
          res.setHeader('X-Content-Type-Options', 'nosniff');
          next();
        },
      });
    
  
      return middlewares;
    },    
  },
};
