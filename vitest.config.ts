import { defineConfig, mergeConfig } from 'vitest/config';

import viteConfig from './vite.config';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      projects: [
        {
          extends: true,
          test: {
            globals: true,
            environment: 'jsdom',
            setupFiles: ['./src/setupTests.ts'],
          },
        },
      ],
    },
  }),
);
