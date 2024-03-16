/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		screen: {
			'tablet': '1000px'
		   },
		extend: {
			colors: {
				'primary-text': '#666666',
				'secondary': '#5DADE2',
				'secondary-hover': '#2E86C1'
			}
		},
	},
	plugins: ['flowbite/plugin', animations],
}
