/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined'
    ? __dirname
    : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  test: {
    projects: (() => {
      const baseUnit = [
        {
          test: {
            environment: 'jsdom',
            globals: true,
            setupFiles: ['./src/setupTests.ts'],
            include: ['src/**/*.test.{ts,tsx}'],
          },
        },
      ];

      // Enable Storybook browser tests only when explicitly requested
      const enableBrowser = process.env.STORYBOOK_BROWSER_TESTS === '1';
      if (!enableBrowser) return baseUnit;

      return [
        ...baseUnit,
        {
          extends: true,
          plugins: [
            storybookTest({
              configDir: path.join(dirname, '.storybook'),
            }),
          ],
          test: {
            environment: 'jsdom',
            browser: {
              enabled: true,
              headless: true,
              provider: 'playwright',
              instances: [{ browser: 'chromium' }],
            },
            setupFiles: ['.storybook/vitest.setup.ts'],
          },
        },
      ];
    })(),
  },
});
