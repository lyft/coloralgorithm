import path from 'path';
import makeConfig from 'rollup-library';

import packageJson from './package.json';

const output = [{
  file: path.resolve('./', packageJson.main),
  format: 'umd',
  name: packageJson.name,
}, {
  file: path.resolve('./', packageJson.module),
  format: 'esm',
  name: packageJson.name,
}];

export default makeConfig({
  input: 'src/index.js',
  output,
  external: ['react'],
});
