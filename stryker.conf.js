/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  packageManager: "npm",
  reporters: ["html", "clear-text", "progress"],
  testRunner: "jest",
  coverageAnalysis: "perTest",
  mutate: ["src/**/*.ts", "!src/**/*.test.ts"],
  jest: {
    projectType: "custom",
    config: require("./jest.config.js"),
  },
  ignoreStatic: true
};