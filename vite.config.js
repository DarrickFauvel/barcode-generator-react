import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import postcssPresetEnv from 'postcss-preset-env'

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    'import.meta.vitest': 'undefined'
  },
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    coverage: {
      reporter: ['text']
    }
  },
  plugins: [react()],
  server: {
    host: '0.0.0.0'
  },
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          features: {
            'nesting-rules': true
          }
        })
      ]
    }
  },
  build: {
    minify: false
  }
})
