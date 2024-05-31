/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			keyframes: {
        static: {
          '0%': { backgroundPosition: '0% 0%' },
          '100%': { backgroundPosition: '100% 100%' },
        },
      },
      animation: {
        static: 'static 1s steps(10) infinite',
      },
      backgroundImage: {
        'static-noise': "url('https://res.cloudinary.com/humbertocolmenares/image/upload/v1717175474/95188_glxj2g.jpg')", 
      },
    },
  },
  plugins: [],
};
