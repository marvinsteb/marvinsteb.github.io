# Portafolio Personal - Marvin Esteban 🚀

Sitio web personal y blog construido con **Astro** + **TypeScript**, desplegado en GitHub Pages.

## 🏗️ Stack Tecnológico

- **Framework:** [Astro](https://astro.build/) - Static Site Generator
- **Lenguaje:** TypeScript (strict mode)
- **Estilos:** CSS con variables custom (Verde Esmeralda / Coral / Azul Claro)
- **Blog:** Markdown con Content Collections de Astro
- **Fuentes:** Outfit + Space Grotesk
- **Deploy:** GitHub Pages via GitHub Actions

## 🚀 Cómo funciona el deploy

```
Código fuente (main)              GitHub Pages (público)
├── src/
│   ├── pages/           ──────►  index.html
│   ├── components/               blog/mi-post/index.html
│   ├── content/blog/             assets/
│   └── layouts/
├── astro.config.ts
└── package.json

    GitHub Action ejecuta
    npm run build ──────────►     Solo HTML/CSS/JS estático
```

> **Importante:** Los archivos `.astro`, `.ts`, `.md` nunca se publican. GitHub Pages solo recibe el output compilado (`dist/`).

### Configuración en GitHub

1. Ve a **Settings → Pages → Source**
2. Selecciona **"GitHub Actions"** (no "Deploy from a branch")
3. El workflow `.github/workflows/deploy.yml` se encarga del resto

## 📝 Blog

Para crear un nuevo post:

1. Crea un archivo `.md` en `src/content/blog/`
2. Agrega el frontmatter:

```markdown
---
title: "Mi nuevo post"
description: "Descripción del post"
pubDate: 2026-02-11
tags: ["php", "laravel"]
---

Contenido del post en Markdown...
```

3. Haz push a `main` y el post se publica automáticamente

## 🛠️ Desarrollo local

```bash
npm install          # Instalar dependencias
npm run dev          # Servidor de desarrollo (http://localhost:4321)
npm run build        # Generar sitio estático en dist/
npm run preview      # Preview del build
```

## ✨ Características

- 🎨 **Diseño Moderno**: Paleta verde esmeralda / coral / azul claro
- 💫 **Animaciones Suaves**: Transiciones y efectos hover
- 📱 **100% Responsive**: Adaptado a móviles, tablets y escritorio
- ⚡ **Rendimiento Extremo**: Astro envía 0 JS por defecto
- 📝 **Blog con Markdown**: Escribe posts sin base de datos
- 🔒 **Type-safe**: TypeScript strict en todo el proyecto

## 📋 Datos profesionales

Los datos se cargan desde `src/data/linkedin-data.ts`. Para actualizar:

### 1. Experiencia Profesional

Abre el archivo `linkedin-data.js` y actualiza la sección `experience`:

```javascript
experience: [
  {
    title: "Tu Título del Puesto",
    company: "Nombre de la Empresa",
    location: "Ciudad, País",
    period: "Mes Año - Presente",
    description: [
      "Logro o responsabilidad 1",
      "Logro o responsabilidad 2",
      "Logro o responsabilidad 3",
    ],
  },
];
```

### 2. Educación

Actualiza la sección `education` con tu formación académica:

```javascript
education: [
  {
    degree: "Licenciatura en Ciencias de la Computación",
    institution: "Universidad XYZ",
    period: "2015 - 2019",
    description: "Promedio: 9.5 - Mención honorífica",
  },
];
```

### 3. Certificaciones

Agrega tus certificaciones en la sección `certifications`:

```javascript
certifications: [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "Enero 2024",
    credential: "ID: ABC123",
  },
];
```

### 4. Proyectos/Portafolio

Actualiza la sección `projects` con tus proyectos destacados:

```javascript
projects: [
  {
    name: "Nombre del Proyecto",
    description: "Descripción breve del proyecto",
    technologies: ["PHP", "Laravel", "MySQL", "Vue.js"],
    image: "img/proyecto1.jpg", // Agrega tu imagen en la carpeta img/
    link: "https://github.com/usuario/proyecto", // URL del proyecto
  },
];
```

### 5. Información de Perfil

Actualiza tus datos personales en la sección `profile`:

```javascript
profile: {
  name: "Tu Nombre",
  headline: "Tu descripción profesional",
  summary: "Tu resumen profesional extendido",
  location: "Ciudad, País",
  email: "tu@email.com",
  phone: "+52 555 123 4567",
  website: "www.tudominio.com"
}
```

### Opciones para sincronizar con LinkedIn

| Método                                                             | Pros                             | Contras         |
| ------------------------------------------------------------------ | -------------------------------- | --------------- |
| **Export CSV** (Settings → Data Privacy → Get a copy of your data) | Datos completos y estructurados  | Tarda hasta 24h |
| **Copiar/pegar** desde el perfil                                   | Inmediato                        | Manual          |
| **PDF** (More → Save to PDF)                                       | Rápido, formato legible          | Hay que parsear |
| **API terceros** (Proxycurl, ScrapIn)                              | Automatizable con GitHub Actions | De pago         |

> **Nota:** LinkedIn no tiene API pública para leer perfiles completos. La API oficial solo da nombre, foto y email básico con OAuth.

## 🎨 Personalización de Estilos

Edita las variables CSS en `src/styles/global.css`:

```css
:root {
  --primary: #10b981; /* Verde Esmeralda */
  --secondary: #f87171; /* Coral */
  --accent: #38bdf8; /* Azul Claro */
}
```

## 📸 Agregar Imágenes de Proyectos

1. Coloca tus imágenes en la carpeta `img/`
2. Actualiza la propiedad `image` en cada proyecto del archivo `linkedin-data.js`
3. Recomendación: usa imágenes de 800x600px o similar proporción

## 📧 Configurar Formulario de Contacto

El formulario actual usa `mailto:` para abrir el cliente de correo del usuario. Para opciones más avanzadas:

### Opción 1: Formspree (Gratis)

1. Regístrate en [formspree.io](https://formspree.io)
2. Actualiza el formulario en `index.html`:

```html
<form action="https://formspree.io/f/TU_ID" method="POST"></form>
```

### Opción 2: EmailJS

1. Regístrate en [emailjs.com](https://www.emailjs.com/)
2. Sigue su documentación para integrar con JavaScript
   3 Actualiza el código en `app.js`

## 🚀 Desplegar Cambios

Después de hacer modificaciones:

```bash
git add .
git commit -m "Actualización de datos del portfolio"
git push origin main
```

Los cambios se reflejarán en tu sitio de GitHub Pages en unos minutos.

## 📱 Diseño Responsive

El sitio está optimizado para:

- ✅ Dispositivos móviles (smartphones)
- ✅ Tablets
- ✅ Laptops y computadoras de escritorio

## 🔧 Estructura del Proyecto

```
├── src/
│   ├── components/         # Componentes Astro reutilizables
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── Experience.astro
│   │   ├── Skills.astro
│   │   ├── Portfolio.astro
│   │   ├── Contact.astro
│   │   └── BlogCard.astro
│   ├── content/
│   │   └── blog/           # Posts del blog en Markdown
│   ├── data/
│   │   └── linkedin-data.ts # Datos profesionales (tipado)
│   ├── layouts/
│   │   └── Layout.astro    # Layout base
│   ├── pages/
│   │   ├── index.astro     # Página principal
│   │   └── blog/
│   │       ├── index.astro # Listado del blog
│   │       └── [...slug].astro # Posts individuales
│   └── styles/
│       └── global.css      # Estilos globales
├── public/
│   └── img/                # Imágenes estáticas
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Action para deploy
├── astro.config.ts         # Configuración de Astro
├── tsconfig.json           # Configuración TypeScript
└── package.json
```

## 📚 Recursos Útiles

- [Documentación de GitHub Pages](https://pages.github.com/)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [Google Fonts](https://fonts.google.com/)

## ❓ Preguntas Frecuentes

**P: ¿Puedo usar una base de datos?**
R: No necesitas. Los posts del blog son archivos Markdown y los datos profesionales están en TypeScript. Astro lo compila todo a HTML estático.

**P: ¿Cómo cambio mi foto de perfil?**
R: Reemplaza el archivo `public/img/foto.jpg` con tu nueva foto.

**P: ¿Cómo agrego un post al blog?**
R: Crea un archivo `.md` en `src/content/blog/`, agrega frontmatter con título/fecha/tags, y haz push.

**P: ¿Por qué Astro y no Jekyll/Hugo?**
R: Astro permite usar TypeScript, componentes reutilizables, y envía 0 JavaScript por defecto. Es el SSG más moderno y rápido.

## 🎯 Próximos Pasos

1. Actualiza `src/data/linkedin-data.ts` con tu información real
2. Agrega tus imágenes de proyectos en `public/img/`
3. Escribe tu primer post en `src/content/blog/`
4. Personaliza los colores en `src/styles/global.css`
5. Haz push a `main` → GitHub Action despliega automáticamente

---

💡 **Tip**: Cada push a `main` dispara un build automático. Tu sitio se actualiza en ~2 minutos.
