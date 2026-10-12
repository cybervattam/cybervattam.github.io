const path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
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
