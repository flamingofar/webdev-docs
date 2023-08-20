import React from "react";

const CLIIcon = ({ fill, size = 24 }: { fill: "light" | "dark"; size?: number }) => {
	return (
		<svg
			width={`${size}px`}
			height={`${size}px`}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M12 19H21M3 5L11 12L3 19"
				stroke={fill === "light" ? "#ffffff" : "#000000"}
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
};

export default CLIIcon;
