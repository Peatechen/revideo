import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default [
  {
    input: 'src/lib/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true,
    },
    plugins: [
      {
        resolveId(id) {
          if (id.startsWith('@flammable7841/core')) {
            return {
              id: '@flammable7841/core',
              external: true,
            };
          }
        },
      },
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './src/lib/tsconfig.json',
        compilerOptions: {
          composite: false,
        },
      }),
      terser(),
    ],
  },
];
