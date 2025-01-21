# Base de Nodos

Proyecto base para crear microfrontends utilizando React y Vite con Module Federation. Este proyecto servirá como punto de partida para que el resto del equipo pueda desarrollar sus módulos.

## Requisitos Previos

- Node.js (>=14.x)
- npm (>=6.x)

## Configuración Inicial

1. Clona el repositorio:

    ```sh
    git clone <URL-del-repositorio>
    cd base_nodos
    ```

2. Instala las dependencias:

    ```sh
    npm install
    ```

3. Actualiza el archivo `package.json`:

    - Cambia el nombre del proyecto:

        ```json
        "name": "nombre_del_proyecto"
        ```

    - Añade el número de puerto, esto es muy importante para evitar conflictos con otros modulos:

        ```json
        "scripts": {
          "dev": "vite --port <numero_de_puerto>",
          "build": "vite build",
          "preview": "npm run build && vite preview --port <numero_de_puerto>"
        }
        ```

## Desarrollo



Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```sh
npm run dev

