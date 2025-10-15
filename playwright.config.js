module.exports = {
  testDir: './test/e2e',
  testMatch: '**/*.spec.js',
  
  testIgnore: [
    '**/*.test.*',
    '**/*.spec.ts',
    '**/unit/**',
    '**/.stryker-tmp/**',
    '**/node_modules/**'
  ],
  
  outputDir: 'artifacts/media',
  workers: 4,
  
  use: {
    baseURL: 'https://example.com',
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { channel: 'chrome' },
    },
  ],
};