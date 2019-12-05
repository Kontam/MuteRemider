// module.exports = withTypescript({
//   webpack (config, options) {
//     config.module.rules.push({
//       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
//       use: {
//         loader: 'url-loader',
//         options: {
//           limit: 100000
//         }
//       }
//     })
//     return config
//   }
// })
const withImages = require('next-images')
const withSass = require('@zeit/next-sass')
module.exports = withImages(withSass({
    cssModules: true,
    webpack(config, options) {

      // config.module.rules.push({
      //   test: /\.(png|jpg|gif|svg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       limit: 100000
      //     }
      //   }
      // })

      return config
    }
  })
)
