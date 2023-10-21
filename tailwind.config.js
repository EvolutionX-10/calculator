/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./src/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			boxShadow: {
				cus: '-9px 13px 23px rgba(250, 163, 255, 0.85), inset -3px -1px 11px #f5d0fe;',
			},
			spacing: {
				85: '21rem',
			},
		},
	},
	plugins: [],
};
