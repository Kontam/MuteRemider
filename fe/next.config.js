require('dotenv').config()

const path = require('path');
const Dotenv = require('dotenv-webpack');

const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
module.exports = withImages(withSass({
    cssModules: true,
    distDir: '/dist/bff/next',
    webpack: config => {
      config.plugins = config.plugins || []
      config.plugins = [
        ...config.plugins,

      // 設定を記述
      new Dotenv({
          path: path.join(__dirname, '.env'),
          systemvars: true
        })
      ]

      config.node = {
        fs: 'empty'
      }

      return config
    }
  })
)
