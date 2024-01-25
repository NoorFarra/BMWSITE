import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'labelred': "url('../imgs/slides/labelRed.jpg')",
        'bmwi4': "url('../imgs/slides/bmwi4.jpg')",
        'footerlogo': "url('../imgs/slides/bmwfooterlogo.jpg')",
        'bmwmotor': "url('../imgs/slides/bmwmotor.jpg')",
        'showroom': "url('../imgs/slides/showroom.jpg')",
        'bmwface': "url('../imgs/slides/img2.jpg')",
        'bmwface2': "url('../imgs/slides/img1.jpg')",
        'bmwface3': "url('../imgs/slides/img3.jpg')",
        'Periodic': "url('../imgs/slides/Periodic.jpg')",
        'parts': "url('../imgs/slides/parts.jpg')",
       
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
