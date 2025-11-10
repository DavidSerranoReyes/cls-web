/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-bg': '#0f0f0f',
				'dark-primary': '#1a1a1a',
				'dark-secondary': '#2a2a2a',
				'accent': '#ff6b35',
				'accent-light': '#ff8555',
			},
			fontFamily: {
				'display': ['Playfair Display', 'serif'],
				'sans': ['Inter', 'sans-serif'],
			},
			fontSize: {
				'xs': ['12px', '16px'],
				'sm': ['14px', '20px'],
				'base': ['16px', '24px'],
				'lg': ['18px', '28px'],
				'xl': ['20px', '28px'],
				'2xl': ['24px', '32px'],
				'3xl': ['30px', '36px'],
				'4xl': ['36px', '40px'],
				'5xl': ['48px', '48px'],
				'6xl': ['64px', '64px'],
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease-in',
				'slide-up': 'slideUp 0.8s ease-out',
				'slide-down': 'slideDown 0.8s ease-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				slideUp: {
					'0%': { transform: 'translateY(30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					'0%': { transform: 'translateY(-30px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
			},
		},
	},
	darkMode: 'class',
	plugins: [],
};
