// esbuild.ts

import * as esbuild from 'esbuild';
import path from 'path';

// Función para construir el proyecto
async function buildProject() {
  try {
    await esbuild.build({
      entryPoints: ['./src/index.tsx'], // Archivo de entrada principal de tu aplicación
      bundle: true, // Compilar el código en un solo archivo
      outfile: './build/bundle.js', // Ruta de salida del archivo compilado
      platform: 'browser', // Plataforma de destino (en este caso, navegador)
      inject: [path.resolve(__dirname, './cjs-shim.ts')], // Inyectar el archivo cjs-shim.ts
    });

    console.log('Build completed successfully.');
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
}

// Llamar a la función para construir el proyecto
buildProject();
