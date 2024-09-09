import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {},
			colors: {
				primary: '#019345',
				darkBg: '#222',
				lightBg: '#F5F5F5',
			},
			boxShadow: {
				navbar: '0 -5px 30px -15px #777',
				header: '0 5px 30px -15px #777',
				darkNavbar: '0 -5px 30px -15px #000',
				darkHeader: '0 5px 30px -15px #000',
			},
			screens: {},
		},
	},
	plugins: [],
}
export default config
