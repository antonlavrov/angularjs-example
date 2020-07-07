const browserSync = require('browser-sync').create();

browserSync.init({
  startPath: '/',
  server: {
    baseDir: 'src',
    routes: {
      '/node_modules': 'node_modules'
    }
  }
});



console.log('gulpfile.js');