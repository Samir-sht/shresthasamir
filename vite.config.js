import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The Vite project lives in app/ so that the build output can be written to
// the repository root, where GitHub Pages serves it from the main branch.
export default defineConfig({
  plugins: [react()],
  root: 'app',
  build: {
    outDir: '..',
    // The repository root holds source files too, so never wipe it.
    emptyOutDir: false,
  },
});
