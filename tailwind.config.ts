import type { Config } from 'tailwindcss'

const config = {
  content: ['./resources/views/**/*.blade.php', './resources/js/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
} satisfies Config

export default config
