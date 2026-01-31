# Portafolio Académico - CNO V Seguridad Informática

**Estudiante:** José Vicente Rodríguez Rivera (GearToTheEnd)  
**Institución:** Universidad Politécnica de San Luis Potosí  
**Asignatura:** CNO V - Seguridad Informática  
**Semestre:** Octavo Semestre

---

## 📋 Descripción

Este portafolio digital reúne las evidencias de trabajo desarrolladas en la asignatura CNO V – Seguridad Informática. El sitio está diseñado con una estética inspirada en Blade Runner 2049, reflejando la temática de Red Team y seguridad informática.

El contenido del portafolio está enfocado en:
- Pruebas de penetración
- Análisis de vulnerabilidades
- Evaluación básica de sistemas
- Combinación de fundamentos teóricos con actividades prácticas

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 18.3.1** - Biblioteca principal para la UI
- **TypeScript** - Tipado estático
- **Tailwind CSS 4.x** - Framework de estilos
- **Vite** - Build tool y dev server
- **Lucide React** - Librería de iconos

### Lenguajes y Herramientas Académicas
- HTML5, CSS3, JavaScript ES6+
- Python, Java, PHP, SQL
- MySQL
- Linux
- Git & GitHub

### Hosting y Despliegue
- **GitHub Pages** - Hosting estático
- **HTTPS/SSL** - Conexión segura
- **Responsive Design** - Compatible con dispositivos móviles

---

## 🛠️ Instalación Local

### Requisitos previos
- Node.js 18+ instalado
- npm o pnpm instalado
- Git instalado

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/TU_USUARIO/TU_REPOSITORIO.git
   cd TU_REPOSITORIO
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o si usas pnpm
   pnpm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   - Navega a `http://localhost:5173`

---

## 📦 Construcción para Producción

Para generar los archivos optimizados para producción:

```bash
npm run build
# o
pnpm build
```

Los archivos se generarán en la carpeta `/dist`.

---

## 🌐 Despliegue en GitHub Pages

### Opción 1: Usando GitHub Actions (Recomendado)

1. **Crear archivo de workflow**
   
   Crea el archivo `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [ main ]
     workflow_dispatch:

   permissions:
     contents: read
     pages: write
     id-token: write

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - name: Checkout
           uses: actions/checkout@v4
           
         - name: Setup Node
           uses: actions/setup-node@v4
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
           
         - name: Upload artifact
           uses: actions/upload-pages-artifact@v3
           with:
             path: ./dist

     deploy:
       environment:
         name: github-pages
         url: ${{ steps.deployment.outputs.page_url }}
       runs-on: ubuntu-latest
       needs: build
       steps:
         - name: Deploy to GitHub Pages
           id: deployment
           uses: actions/deploy-pages@v4
   ```

2. **Configurar GitHub Pages**
   - Ve a: Repositorio → Settings → Pages
   - Source: GitHub Actions
   - Guarda los cambios

3. **Hacer push del código**
   ```bash
   git add .
   git commit -m "Deploy portfolio"
   git push origin main
   ```

4. **Acceder al sitio**
   - Tu sitio estará disponible en: `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

### Opción 2: Despliegue Manual

1. **Construir el proyecto**
   ```bash
   npm run build
   ```

2. **Instalar gh-pages**
   ```bash
   npm install -g gh-pages
   ```

3. **Desplegar**
   ```bash
   gh-pages -d dist
   ```

---

## 📁 Estructura del Proyecto

```
portafolio-seguridad/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Presentation.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── TechnicalInfo.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   └── Footer.tsx
│   │   └── App.tsx
│   ├── styles/
│   │   ├── tailwind.css
│   │   ├── theme.css
│   │   └── index.css
│   └── main.tsx
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎨 Diseño y Estética

El portafolio utiliza una paleta de colores inspirada en **Blade Runner 2049**:

- **Principal:** `#d4a574` (Sepia/Oro)
- **Acento:** `#cc6633` (Naranja oscuro/Rojizo)
- **Fondo:** `#0a0a0a` (Negro profundo)
- **Contraste:** `#1a1a1a` (Gris oscuro)

### Características visuales:
- Efectos de glow y blur sutiles
- Animaciones suaves
- Tipografía monoespaciada (font-mono)
- Bordes y líneas decorativas
- Esquinas con brackets
- Gradientes radiales
- Scrollbar personalizado

---

## 🔒 Seguridad

- Sitio servido sobre **HTTPS**
- Sin almacenamiento de datos sensibles
- Formulario de contacto de demostración (no conectado a backend)
- Compatible con las mejores prácticas de seguridad web

---

## 📝 Notas Académicas

Este proyecto fue desarrollado como parte de la asignatura CNO V - Seguridad Informática, con el objetivo de:

1. Documentar el proceso de aprendizaje
2. Demostrar competencias técnicas adquiridas
3. Aplicar conocimientos de desarrollo web
4. Crear una plataforma de evidencias académicas

---

## 📄 Licencia

© 2026 José Vicente Rodríguez Rivera  
CNO V - Seguridad Informática  
Universidad Politécnica de San Luis Potosí  
Todos los derechos reservados

Este proyecto es de carácter académico y educativo.

---

## 📧 Contacto

**Nombre:** José Vicente Rodríguez Rivera  
**Alias:** GearToTheEnd  
**Institución:** Universidad Politécnica de San Luis Potosí  
**Programa:** Ingeniería en Tecnologías de la Información  
**Especialización:** Seguridad Informática y Red Team

---

## 🙏 Agradecimientos

- Universidad Politécnica de San Luis Potosí
- Profesores de la asignatura CNO V
- Comunidad de código abierto

---

**Fecha de creación:** Enero 2026  
**Última actualización:** Enero 2026
