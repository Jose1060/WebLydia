/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	mode: "jit",
	theme: {
		extend: {
			colors: {
				primary: "#00040f",
				secondary: "#00f6ff",
				dimWhite: "rgba(255, 255, 255, 0.7)",
				dimBlue: "rgba(9, 151, 124, 0.1)",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				poiret: ["Poiret One", "cursive"],
				homemade: ["Homemade Apple", "cursive"],
				marmelad: ["Marmelad", "sans-serif"],
				josefin_slob: ["Josefin Slab", "serif"],
			},
			backgroundImage: {
				"footer-texture": 'url("./src/assets/Wave.svg")',
				"pastel-texture": 'url("./src/assets/pastel.jpg")',
			},
		},
		screens: {
			xs: "480px",
			ss: "620px",
			sm: "768px",
			md: "1060px",
			lg: "1200px",
			xl: "1700px",
		},
	},
	plugins: [],
};
