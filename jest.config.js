module.exports = {
    verbose: true,
    preset: '@shelf/jest-dynamodb',

    collectCoverageFrom: ['./src/**/*.ts'],

    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
      },
    coverageThreshold: {
        './src/**/*.ts': {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },

};