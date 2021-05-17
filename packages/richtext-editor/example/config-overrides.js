/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const {
  override,
  addWebpackModuleRule,
  addWebpackResolve,
  addLessLoader,
  babelInclude,
  babelExclude,
  adjustStyleLoaders,
} = require('customize-cra');

module.exports = {
  webpack: override(
    addWebpackResolve({ symlinks: false }),
    adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
      css.options.sourceMap = true;
      postcss.options.sourceMap = true;
      if (resolve) {
        resolve.options.sourceMap = true;
      }
      if (processor && processor.loader.includes('sass-loader')) {
        processor.options.sourceMap = true;
        processor.options.implementation = require('sass');
      }
    }),
    addWebpackModuleRule({
      test: /\.iframe\.(scss|sass|css)$/,
      use: [
        { loader: 'css-to-string-loader' },
        { loader: 'css-loader' },
        {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'),
          },
        },
      ],
    }),
    addWebpackModuleRule({
      test: /\.raw\.svg$/,
      use: [{ loader: 'raw-loader' }],
    }),
    babelExclude([path.resolve(__dirname, './src/lib')]),
    addLessLoader({
      strictMath: false,
      noIeCompat: true,
      javascriptEnabled: true,
    }),
  ),
};
