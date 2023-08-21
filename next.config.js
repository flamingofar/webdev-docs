const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.tsx",
	resolve: {
		extensions: ["", ".js", ".jsx", ".ts", ".tsx"],
	},
});

module.exports = withNextra();
