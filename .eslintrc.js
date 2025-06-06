module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // parserOptions are typically handled by @nuxt/eslint-config
  extends: [
    '@nuxt/eslint-config', // New Nuxt 3 config
    'prettier', // Keep prettier integration
    'plugin:prettier/recommended' // Keep prettier plugin
  ],
  plugins: [
    'prettier' // Keep prettier plugin
  ],
  // add your custom rules here
  rules: {
    // 'nuxt/no-cjs-in-config': 'off', // Removed, not relevant for Nuxt 3 ESM config
    'vue/no-v-html': 'off' // Keep existing custom rule
  }
}
