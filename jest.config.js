module.exports = {
	clearMocks: true,
	coverageDirectory: 'coverage',
	collectCoverageFrom: [
		'<rootDir>/src/**',
		'!<rootDir>/src/**/__tests__/**',
		'!<rootDir>/node_modules/',
		'!<rootDir>/build/',
		'!<rootDir>/src/index.ts',
		'!<rootDir>/src/setup-tests.ts'
	],
	coverageReporters: [
		'json',
		'text',
		'lcov',
		'clover'
	],
	setupFiles: [
		'<rootDir>/src/setup-tests.ts'
	],
	globals: {
		'ts-jest': {
			'tsConfig': 'tsconfig.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'tsx',
		'js'
	],
	roots: [
		'<rootDir>/src'
	],
	testMatch: [
		'**/__tests__/*.spec.(ts|tsx|js)'
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	}
};
