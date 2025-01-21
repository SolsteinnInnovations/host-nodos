import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { dependencies } from "./package.json";
import { federation } from "@module-federation/vite";

export default defineConfig({
    build: {
        // Establece el objetivo de la construcción para navegadores modernos
        target: 'es2020',
        // Desactiva la precarga de módulos
        modulePreload: false,
        // Desactiva la minimización del código en la construcción
        minify: false,
        // Desactiva la división del código CSS en archivos separados
        cssCodeSplit: false,
    },
    plugins: [
        react(),
        // Configuración del plugin de Module Federation para compartir módulos entre aplicaciones
        federation({
            // Nombre de la aplicación base que está usando Module Federation
            name: 'base_nodos',
            // Remotos (otras aplicaciones entrantes que compartirán módulos)
            remotes: {
                dashboard: {
                    // Tipo de módulo que se va a compartir, en este caso es 'module'
                    type: 'module',
                    // Nombre del módulo remoto
                    name: 'dashboard',
                    // URL donde se encuentra el archivo de entrada del módulo remoto
                    entry: 'http://localhost:4174/remoteEntry.js',
                    // Nombre global que se usará para acceder al módulo
                    entryGlobalName: 'dashboard',
                    // Alcance de los módulos compartidos
                    shareScope: 'default',
                },
            },
            // Módulos que se exponen desde esta aplicación para que otras aplicaciones los usen
            exposes: {
                // Exposición del archivo CSS para que otras aplicaciones puedan utilizarlo
                './index.css': './src/index.css',
            },
            // Nombre del archivo de salida para los módulos remotos 
            filename: 'remoteEntry.js',
            // Dependencias que se compartirán entre las aplicaciones que usen Federation
            shared: ["react", "react-dom", "tailwindcss"],
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
});
