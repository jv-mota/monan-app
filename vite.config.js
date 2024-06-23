import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Necessário para escutar em todas as interfaces de rede, incluindo o 0.0.0.0
    port: 3000, // Porta padrão para desenvolvimento
    strictPort: true, // Falhar se a porta 3000 já estiver em uso
    watch: {
      usePolling: true, // Necessário para que o hot reload funcione no Docker
    },
  },
});
