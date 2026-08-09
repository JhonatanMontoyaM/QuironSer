# Quirónser Landing Page

Landing page responsive creada con React + Vite. Incluye:

- Hero con fondo y personaje en capas independientes.
- Navegación responsive con menú móvil.
- Secciones de enfoque, experiencia y contacto.
- Formulario demostrativo con validación del navegador y confirmación local.
- Diseño accesible, responsive y optimizado para desktop y móvil.
- Aviso legal de bienestar complementario.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Crear versión de producción

```bash
npm run build
npm run preview
```

## Personalización rápida

- Textos y estructura: `src/App.jsx`
- Colores, tipografía y responsive: `src/styles.css`
- Fondo: `public/images/quironser-background.png`
- Personaje: `public/images/quiron-character.png`

El formulario es visual/demostrativo. Para recibir solicitudes reales, conecta `handleSubmit` con Formspree, EmailJS, Supabase o tu propia API.
