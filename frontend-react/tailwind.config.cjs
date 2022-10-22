/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		colors: {
			taupe: "#AD9D90",
			charcoal: "#545454",
			white: "#ffffff",
		},
		fontFamily: {
			Abril: ["Abril Fatface", "cursive"],
			DM: ["DM Serif Display", "serif"],
		},
		extend: {
			backgroundImage: {
				hero: "url('../src/assets/bgIMG.png')",
			},
		},
	},
	plugins: [],
};
