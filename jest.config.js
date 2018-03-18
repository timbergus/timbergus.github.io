module.exports = {
  testRegex: '/*.test.js$',
  collectCoverage: true,
  coverageDirectory: '__tests__/coverage',
  collectCoverageFrom: [
    'src/**/*.js'
  ],
  coverageThreshold: {
    global: {
      branches: 10,
      functions: 10,
      lines: 10,
      statements: 10
    }
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.wasm$': 'wasm-loader'
  },
  moduleNameMapper: {
    '^utils[/](.*)$': '<rootDir>/src/app/utils/$1'
  }
};
