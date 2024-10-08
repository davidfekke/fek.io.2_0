/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero-back': "url('/newcockpit-3x.jpg')",
				'product-back': "url('/garmin-3x.jpg')",
				'blog-back': "url('/blogheadergraphic-3x.jpg')",
				'contact-back': "url('/p51-3x.jpg')",
				'about-back': "url('/b24-3x.jpg')",
			}
		},
		screens: {
			xs: '375px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
