import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <strong>WebDev 2.Sem E23</strong>,
	project: {
		link: "https://github.com/flamingofar/webdev-docs",
	},

	docsRepositoryBase: "https://github.com/flamingofar/webdev-docs",
	footer: {
		text: "Made by Malte Skjoldager and Nextra with ❤️",
	},
	head: function head() {
		return (
			<>
				<meta name="og:title" content={"WebDev 2.Sem"} />
				<title>WebDev Docs</title>
			</>
		);
	},
};

export default config;
