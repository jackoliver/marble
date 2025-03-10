const path = require("path");

//Export a function. Accept the base config as the only param.
module.exports = {
	features: {
		postcss: false,
	},
	webpackFinal: async (config, { configType }) => {
		// `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
		// You can change the configuration based on that.
		// 'PRODUCTION' is used when building the static version of storybook.

		// Make whatever fine-grained changes you need
		config.module.rules.push({
			test: /\.scss$/,
			use: ["style-loader", "css-loader", "sass-loader"],
			include: path.resolve(__dirname, "../"),
		});

		// Return the altered config
		return config;
	},
	stories: ["../src/**/*.stories.[mj]s"],
	addons: [
		{
			name: "@storybook/addon-essentials",
			options: {
				// https://storybook.js.org/docs/html/essentials/introduction
				actions: false,
				backgrounds: true,
				controls: false,
				docs: false,
				toolbars: false,
			},
		},
		"@storybook/addon-knobs",
		"@storybook/addon-a11y",
	],
};
