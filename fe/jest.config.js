// module.exports = {
//   preset: 'ts-jest',
//   verbose: true,
//   transform: {
//     '^.+\\.tsx?$': 'babel-jest',
//   },
//   moduleFileExtensions: [
//     'ts',
//     'tsx',
//     'js',
//     'jsx',
//     'json',
//     'node',
//   ],
//   // setupFilesAfterEnv: ['./setupTests.js'],
// };
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(test).ts?(x)"],
  transform: {
    "^.+\\.svg$": "<rootDir>/svgTransform.js"
  },
};
