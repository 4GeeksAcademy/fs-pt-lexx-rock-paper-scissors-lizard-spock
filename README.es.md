# Piedra, Papel, Tijera, Lagarto, Spock (version web)

## Descripcion del proyecto

Este proyecto implementa en el navegador el juego **Piedra, Papel, Tijera, Lagarto, Spock** usando HTML, CSS y JavaScript.

La app permite:
- Elegir una opcion: `rock`, `paper`, `scissors`, `lizard` o `spock`.
- Generar una opcion aleatoria para la computadora.
- Comparar ambas elecciones segun las reglas del juego.
- Mostrar el resultado de cada ronda directamente en la interfaz.

## Reglas del juego

- **Rock** aplasta a **Scissors** y **Lizard**.
- **Paper** cubre a **Rock** y desautoriza a **Spock**.
- **Scissors** cortan a **Paper** y decapitan a **Lizard**.
- **Lizard** devora a **Paper** y envenena a **Spock**.
- **Spock** rompe a **Scissors** y vaporiza a **Rock**.

Si ambas opciones son iguales, es empate.

## Estructura del proyecto

- `src/index.html`: pagina principal e interfaz.
- `src/app.js`: logica del juego y eventos de botones.
- `src/style.css`: estilos visuales.
- `vite.config.js`: configuracion de Vite con `src` como raiz.

## Como ejecutar

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el servidor de desarrollo:

```bash
npm run start
```

3. Abrir la URL local que muestra Vite (normalmente `http://localhost:3000`).

## Build de produccion

```bash
npm run build
```