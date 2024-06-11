/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				main: '#2D4538',
				secondary: '#527D66',
				highlight: '#49715B',
				dark: '#1F2E26',
				light: '#EAEAEA'
			},
			fontFamily: {
				yellowtail: ['Yellowtail', 'cursive'],
				inter: ['Inter', 'sans-serif'],
				jaldi: ['Jaldi', 'sans-serif']
			}
		}
	},
	plugins: []
};
