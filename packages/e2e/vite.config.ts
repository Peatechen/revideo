/// <reference types="vitest" />

import motionCanvas from '@flammable7841/vite-plugin';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [
    motionCanvas.default({
      project: ['./tests/project.ts'],
    }),
  ],
  test: {
    testTimeout: 60000,
  },
});
