/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#080134",
				primary: "#01C5BA",
			},
		},
	},
	plugins: [],
};
