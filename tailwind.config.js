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
				'cus': '-9px 13px 23px rgba(0, 163, 255, 0.65), inset -3px 4px 11px #B0DFFF;'
			},
			spacing: {
				'85': '21rem'
			}
		},
	},
	plugins: [],
};
