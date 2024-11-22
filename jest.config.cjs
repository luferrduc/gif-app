module.exports = {
  transform: {
    "^.+\\.(t|j)sx?$": "babel-jest",
  },
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@utils/(.*)$": "<rootDir>/src/utils/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@helpers/(.*)$": "<rootDir>/src/helpers/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  setupFiles: ['./jest.setup.js']
}