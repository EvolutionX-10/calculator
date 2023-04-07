import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwind from 'tailwindcss';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
});
