import typescript from 'rollup-plugin-typescript2';
import projPkg from '../../package.json';
import pkg from './package.json';

export default [
  {
    input: 'src/index.ts',
    external: Object.keys(projPkg.peerDependencies || {}),
    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
    ],
    output: [
      // { file: `${pkg.main}/index.js`, format: 'cjs' },
      // { file: `${pkg.module}/index.js`, format: 'esm' },
      {
        file: 'example/src/lib/index.js',
        format: 'es',
        banner: '/* eslint-disable */',
      },
    ],
  },
];
