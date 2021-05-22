import typescript from 'rollup-plugin-typescript2';
import scss from 'rollup-plugin-scss';
import projPkg from '../../package.json';
import pkg from './package.json';

const isProd = process.env.NODE_ENV === 'prod';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(projPkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      scss({
        output: false,
        sass: require('sass'),
      }),
    ],
    output: isProd
      ? [
          { file: `${pkg.main}/index.js`, format: 'cjs' },
          { file: `${pkg.module}/index.js`, format: 'esm' },
        ]
      : [
          {
            file: 'example/src/lib/index.js',
            format: 'es',
            banner: '/* eslint-disable */',
          },
        ],
  },
];
