module.exports = {
  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
  },
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/packages/nx-python',
  displayName: 'nx-python',
  testEnvironment: 'node',
  preset: '../../jest.preset.ts',
};
