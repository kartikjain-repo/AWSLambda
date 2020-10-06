module.exports = {
    verbose: true,
    preset: '@shelf/jest-dynamodb',

    collectCoverageFrom: ['./src/**/*.ts'],

    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
      },
    coverageThreshold: {
        './src/**/*.ts': {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },

};