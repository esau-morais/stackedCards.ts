/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.ts'],
    include: ['./src/**/*.spec.{ts,tsx}'],
    watchExclude: [
      '.*\\/node_modules\\/.*',
      '.*\\/build\\/.*'
    ],
  },
})
