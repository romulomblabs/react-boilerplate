/* eslint-disable no-undef */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
};
