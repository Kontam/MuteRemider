const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/muter_index.jsx', 'public/js')
  .react('resources/js/login_index.jsx', 'public/js')
  .extract([])
  .sass('resources/sass/index.scss', 'public/css')
  // .sass('resources/sass/app.scss', 'public/css')
  .options({
    postCss: [
      require('autoprefixer')(),
    ],
    processCssUrls: false,
  })
  .webpackConfig({
    externals: {
      base_path: 'base_path',
    },
  });
