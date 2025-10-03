import preact from '@preact/preset-vite';
import {defineConfig} from 'vite';
import motionCanvas from '../vite-plugin/src/main';

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@flammable7841/ui',
        replacement: '@flammable7841/ui/src/main.tsx',
      },
      {
        find: '@flammable7841/2d/editor',
        replacement: '@flammable7841/2d/src/editor',
      },
      {
        find: /@flammable7841\/2d(\/lib)?/,
        replacement: '@flammable7841/2d/src/lib',
      },
      {find: '@flammable7841/core', replacement: '@flammable7841/core/src'},
    ],
  },
  plugins: [
    preact({
      include: [
        /packages\/ui\/src\/(.*)\.tsx?$/,
        /packages\/2d\/src\/editor\/(.*)\.tsx?$/,
      ],
    }),
    motionCanvas({
      buildForEditor: false,
    }),
  ],
  build: {
    minify: false,
    rollupOptions: {
      output: {
        entryFileNames: '[name].js',
      },
    },
  },
});
