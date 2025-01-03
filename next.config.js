var webpack = require("webpack");
var path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: ( config,options ) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'styles': path.resolve(__dirname, './styles'),
      'env': path.resolve(__dirname, './utils/Constants')
    }

    config.plugins.push(
      new webpack.ProvidePlugin({
        'constants': 'constants'
      })
    ) 

    config.module.rules.push( {
      test: /\.(glsl|vs|fs|vert|frag)$/,
      type: 'asset/source',
      generator:
      {
          filename: 'assets/images/[hash][ext]'
      }
    })

    return config
  },

}

module.exports = nextConfig
