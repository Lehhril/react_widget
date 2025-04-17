// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: 'src/widgets/Testimonial_Slider/Index.jsx',
      name: 'TestimonialSlider',
      formats: ['umd'],
      fileName: 'testimonial-slider',
    },
    rollupOptions: {
      // Externalize React so it's not bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    outDir: 'dist/widgets',
  },
});
