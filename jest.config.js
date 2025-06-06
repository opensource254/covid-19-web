module.exports = {
  testEnvironment: 'jsdom', // Added
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
    // '^vue$': 'vue/dist/vue.common.js' // Removed
  },
  moduleFileExtensions: ['js', 'ts', 'vue', 'json'], // Added 'ts'
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest', // Added for TypeScript
    '.*\\.(vue)$': '@vue/vue3-jest' // Changed to @vue/vue3-jest
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue'
  ]
}
