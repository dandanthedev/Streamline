/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				white: {
					DEFAULT: '#ffffff',
					100: '#333333',
					200: '#666666',
					300: '#999999',
					400: '#cccccc',
					500: '#ffffff',
					600: '#ffffff',
					700: '#ffffff',
					800: '#ffffff',
					900: '#ffffff'
				},
				celestial_blue: {
					DEFAULT: '#509bd6',
					100: '#0b2030',
					200: '#164060',
					300: '#226090',
					400: '#2d80c0',
					500: '#509bd6',
					600: '#74b0de',
					700: '#97c4e7',
					800: '#bad8ef',
					900: '#dcebf7'
				},
				charcoal: {
					DEFAULT: '#373f55',
					100: '#0b0c11',
					200: '#161921',
					300: '#212532',
					400: '#2c3243',
					500: '#373f55',
					600: '#546080',
					700: '#7884a7',
					800: '#a5adc4',
					900: '#d2d6e2'
				},
				emerald: {
					DEFAULT: '#59be77',
					100: '#102817',
					200: '#1f512e',
					300: '#2f7945',
					400: '#3fa25c',
					500: '#59be77',
					600: '#7bcc93',
					700: '#9cd8ae',
					800: '#bde5c9',
					900: '#def2e4'
				},
				dodger_blue: {
					DEFAULT: '#0194f6',
					100: '#001d31',
					200: '#003b61',
					300: '#015892',
					400: '#0175c3',
					500: '#0194f6',
					600: '#2caafe',
					700: '#61bffe',
					800: '#95d4fe',
					900: '#caeaff'
				}
			}
		}
	},

	plugins: []
};

module.exports = config;
