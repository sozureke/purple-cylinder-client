import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			fontSize: {
				'heading-16': '16px',
				'heading-18': '18px',
				'heading-26': '26px',
				'heading-34': '34px',
				'heading-68': '68px',
				'heading-110': '110px',
				'text-14': '14px',
				'text-16': '16px',
				'text-18': '18px',
				'text-26': '26px'
			},
			lineHeight: {
				'130': '1.3'
			},
			colors: {
				'grey-color': '#A5A5A5',
				'dark-color': '#141414'
			},
			fontFamily: {
				heading: ['Power Grotesk', 'sans-serif'],
				text: ['Spoof', 'Arial', 'Helvetica', 'sans-serif']
			}
		}
	},
	plugins: []
}
export default config
