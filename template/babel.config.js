module.exports = {
	presets: ["module:metro-react-native-babel-preset"],
	plugins: [
		["babel-plugin-styled-components"],
		[
			"module-resolver",
			{
				root: ["./src"],
				extensions: [
					".ios.ts",
					".android.ts",
					".ts",
					".ios.tsx",
					".android.tsx",
					".tsx",
					".jsx",
					".js",
					".json",
				],
				alias: {
					"@": "./src",
					"@components": "./src/components",
					"@contexts": "./src/contexts",
					"@services": "./src/services",
					"@store": "./src/store",
					"@styles": "./src/styles",
					"@theme": "./src/theme",
					"@utils": "./src/utils",
					"@views": "./src/views",
				},
			},
		],
	],
};
