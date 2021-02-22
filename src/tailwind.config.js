const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: ['./**/*.cshtml', './**/*.cs']
	},
	darkMode: false,
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow', 'sans-serif'],
				serif: ['Georgia', 'Times New Roman', 'serif'],
				proxima: ['Proxima', 'Arial', 'Gill Sans MT', 'sans-serif'],
			},
			typography: {
				DEFAULT: {
					css: {
						'pre code::before': {
							content: 'none',
						},
						'pre code::after': {
							content: 'none',
						},
					},
				},
			},
			colors: {
				// Interpretation of http://ux.episerver.com/#colors
				'primary': '#1456f1',
				'primary-light': '#f0f0f2',
				'primary-dark': '#d4e0fd',
				'surface-light': '#fafafa',
				'surface-dark': '#dedede',
				'admin': '#fbfbfb',
				'line': '#bebebe',
				'copy': '#01062b',
				'inactive': '#979797',
				'active': '#8ebaff',
				'success': '#81c784',
				'info': '#fff176',
				'warning': '#ffb74d',
				'danger': '#F44336',
				'navigation': '#040a47',
			}
		},
	},
	variants: {
		extend: {
			outline: ['hover', 'active'],
			ringColor: ['hover', 'active'],
			ringOffsetColor: ['hover', 'active'],
			ringOffsetWidth: ['hover', 'active'],
			ringOpacity: ['hover', 'active'],
			ringWidth: ['hover', 'active'],
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
