/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'tertiary-fixed-dim': '#c6c7c2',
				tertiary: '#424440',
				'surface-dim': '#dadada',
				'secondary-container': '#e2e2e2',
				'on-primary': '#ffffff',
				'surface-container-high': '#e8e8e8',
				secondary: '#5e5e5e',
				'surface-container-highest': '#e2e2e2',
				'on-primary-fixed-variant': '#004787',
				'on-primary-fixed': '#001c3b',
				'secondary-fixed': '#e2e2e2',
				'tertiary-fixed': '#e3e3de',
				'surface-container': '#eeeeee',
				'on-tertiary-fixed-variant': '#454744',
				'inverse-primary': '#a6c8ff',
				'surface-bright': '#f9f9f9',
				'primary-fixed-dim': '#a6c8ff',
				'on-error': '#ffffff',
				'inverse-surface': '#303030',
				'outline-variant': '#c1c6d3',
				'on-secondary-fixed-variant': '#474747',
				'secondary-fixed-dim': '#c6c6c6',
				'on-primary-container': '#bbd4ff',
				'on-secondary-fixed': '#1b1b1b',
				'on-background': '#1b1b1b',
				'tertiary-container': '#5a5b58',
				'primary-container': '#005baa',
				'on-tertiary-fixed': '#1a1c19',
				'on-error-container': '#93000a',
				surface: '#f9f9f9',
				'primary-fixed': '#d5e3ff',
				primary: '#004481',
				'surface-variant': '#e2e2e2',
				'surface-container-low': '#f3f3f3',
				'on-surface': '#1b1b1b',
				'on-secondary-container': '#646464',
				'inverse-on-surface': '#f1f1f1',
				outline: '#727783',
				error: '#ba1a1a',
				'surface-tint': '#0c5fae',
				'error-container': '#ffdad6',
				'on-secondary': '#ffffff',
				'on-tertiary': '#ffffff',
				'on-surface-variant': '#414751',
				'on-tertiary-container': '#d3d3ce',
				'surface-container-lowest': '#ffffff',
				background: '#f9f9f9',
				'blueprint-grid': '#0000001a',
				'surface-main': '#f9f9f9',
				'mac-red': '#FF5F57',
				'mac-yellow': '#FFBD2E',
				'mac-green': '#28C840',
				'surface-accent': '#005baa'
			},
			boxShadow: {
				cartoon: '8px 8px 0px 0px #000000',
				'cartoon-sm': '4px 4px 0px 0px #000000'
			},
			backgroundImage: {
				blueprint:
					'linear-gradient(to right, #0000001a 1px, transparent 1px), linear-gradient(to bottom, #0000001a 1px, transparent 1px)'
			},
			borderRadius: {
				DEFAULT: '0.25rem',
				lg: '0.5rem',
				xl: '0.75rem',
				full: '9999px'
			},
			spacing: {
				unit: '4px',
				gutter: '24px',
				'rule-section': '2px',
				'rule-grid': '1px',
				'margin-mobile': '20px',
				'margin-desktop': '64px'
			},
			fontFamily: {
				'headline-lg-mobile': ['Newsreader'],
				'body-md': ['Newsreader'],
				'label-md': ['Hanken Grotesk'],
				'headline-lg': ['Newsreader'],
				'headline-xl': ['Newsreader'],
				'nav-lg': ['Hanken Grotesk'],
				'body-lg': ['Newsreader']
			},
			fontSize: {
				'headline-lg-mobile': [
					'32px',
					{
						lineHeight: '1.2',
						fontWeight: '600'
					}
				],
				'body-md': [
					'16px',
					{
						lineHeight: '1.6',
						fontWeight: '400'
					}
				],
				'label-md': [
					'12px',
					{
						lineHeight: '1.0',
						letterSpacing: '0.1em',
						fontWeight: '600'
					}
				],
				'headline-lg': [
					'48px',
					{
						lineHeight: '1.2',
						letterSpacing: '-0.01em',
						fontWeight: '500'
					}
				],
				'headline-xl': [
					'64px',
					{
						lineHeight: '1.1',
						letterSpacing: '-0.02em',
						fontWeight: '600'
					}
				],
				'nav-lg': [
					'14px',
					{
						lineHeight: '1.0',
						letterSpacing: '0.15em',
						fontWeight: '700'
					}
				],
				'body-lg': [
					'20px',
					{
						lineHeight: '1.6',
						fontWeight: '400'
					}
				]
			}
		}
	},
	plugins: []
};
