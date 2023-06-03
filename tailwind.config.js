/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#080134",
				primary: "#01C5BA",
				secondary: "#393556",
				"custom-gray": "#CECCD6",
			},
		},
	},
	plugins: [],
};
