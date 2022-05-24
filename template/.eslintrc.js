module.exports = {
	env: {
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:import/recommended",
		"plugin:react-hooks/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
		project: ["./tsconfig.json"],
	},
	plugins: ["react", "react-hooks", "@typescript-eslint", "prettier"],
	rules: {
		indent: ["error", "tab"],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"react/prop-types": "off",

		"no-empty-function": "off",
		"@typescript-eslint/no-empty-function": "off",
	},
	settings: {
		react: {
			version: "detect",
		},
		"import/ignore": ["react-native"],
		"import/resolver": {
			typescript: {},
		},
	},
};
