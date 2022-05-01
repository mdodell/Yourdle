import nextJest from 'next/jest';

const createJestConfig = nextJest();

const customJestConfig = {
	setupFilesAfterEnv: ['./jest.setup.ts'],
	modulePathIgnorePatterns: ['<rootDir>/src/e2e'],
	moduleNameMapper: {
		'^@utils(.*)$': '<rootDir>/src/utils$1',
		'^@atoms(.*)$': '<rootDir>/src/components/atoms$1',
		'^@molecules(.*)$': '<rootDir>/src/components/molecules$1',
		'^@organisms(.*)$': '<rootDir>/src/components/organisms$1',
		'^@templates(.*)$': '<rootDir>/src/components/templates$1',
	},
	testEnvironment: 'jsdom',
};

// createJestConfig returns an async function that returns a jest config -
// so instead of doing this:
// module.exports = createJestConfig(customJestConfig)

// Take the returned async function...
const asyncConfig = createJestConfig(customJestConfig);

// and wrap it...
module.exports = async () => {
	const config = await asyncConfig();
	config.transformIgnorePatterns = [
		// ...your ignore patterns
	];
	return config;
};
