# 🚀 Guía de Despliegue - GitHub Pages

Esta guía te ayudará a desplegar tu portafolio académico en GitHub Pages paso a paso.

---

## 📋 Requisitos Previos

Antes de comenzar, asegúrate de tener:

- [ ] Una cuenta de GitHub
- [ ] Git instalado en tu computadora
- [ ] Node.js 18+ y npm instalados
- [ ] El código del proyecto en tu máquina local

---

## 🔧 Configuración Inicial

### 1. Crear un repositorio en GitHub

1. Ve a [GitHub](https://github.com) e inicia sesión
2. Haz clic en el botón **"New"** (Nuevo) o el ícono **"+"** → **"New repository"**
3. Configura tu repositorio:
   - **Repository name:** `portafolio-academico` (o el nombre que prefieras)
   - **Description:** "Portafolio Académico - CNO V Seguridad Informática"
   - **Visibility:** Public (Público)
   - **NO** inicialices con README, .gitignore o licencia (ya están en el proyecto)
4. Haz clic en **"Create repository"**

### 2. Conectar tu proyecto local con GitHub

Abre la terminal en la carpeta de tu proyecto y ejecuta:

```bash
# Inicializar Git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer el primer commit
git commit -m "Initial commit: Portafolio Académico"

# Agregar el remote de GitHub (reemplaza TU_USUARIO y TU_REPO con tus datos)
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git

# Cambiar el nombre de la rama a main (si es necesario)
git branch -M main

# Hacer push del código
git push -u origin main
```

---

## 🌐 Habilitar GitHub Pages

### Opción A: GitHub Actions (Recomendado - Automático)

Este método desplegará automáticamente cada vez que hagas push a la rama main.

1. **Configurar GitHub Pages**
   - Ve a tu repositorio en GitHub
   - Haz clic en **Settings** (Configuración)
   - En el menú lateral, busca **Pages**
   - En **Build and deployment**:
     - **Source:** Selecciona **"GitHub Actions"**
   - Guarda los cambios

2. **El workflow ya está configurado**
   - El archivo `.github/workflows/deploy.yml` ya está incluido en el proyecto
   - Este archivo se ejecutará automáticamente cuando hagas push

3. **Ver el despliegue**
   - Ve a la pestaña **Actions** en tu repositorio
   - Verás el workflow ejecutándose
   - Una vez completado (marcado con ✓ verde), tu sitio estará listo

4. **Acceder a tu sitio**
   - Tu portafolio estará disponible en:
   - `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

### Opción B: Despliegue Manual

Si prefieres controlar manualmente cuándo desplegar:

1. **Construir el proyecto localmente**
   ```bash
   npm install
   npm run build
   ```

2. **Instalar gh-pages** (solo la primera vez)
   ```bash
   npm install -D gh-pages
   ```

3. **Agregar scripts al package.json**
   Abre `package.json` y agrega en la sección "scripts":
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. **Desplegar**
   ```bash
   npm run deploy
   ```

5. **Configurar GitHub Pages**
   - Ve a Settings → Pages
   - Source: Selecciona **"Deploy from a branch"**
   - Branch: Selecciona **"gh-pages"** y **"/ (root)"**
   - Guarda

6. **Acceder a tu sitio**
   - `https://TU_USUARIO.github.io/TU_REPOSITORIO/`

---

## 🔄 Actualizar el Sitio

### Con GitHub Actions (Automático)

Cada vez que hagas cambios y los subas a GitHub, el sitio se actualizará automáticamente:

```bash
# Hacer cambios en el código
# ...

# Agregar los cambios
git add .

# Hacer commit
git commit -m "Descripción de los cambios"

# Subir a GitHub
git push origin main

# ¡El sitio se actualizará automáticamente! 🎉
```

### Con Despliegue Manual

```bash
# Hacer cambios en el código
# ...

# Desplegar manualmente
npm run deploy
```

---

## 🐛 Solución de Problemas

### El sitio no se ve correctamente

**Problema:** Estilos o recursos no cargan correctamente.

**Solución:** Verifica el `base` en `vite.config.ts`:

```typescript
export default defineConfig({
  base: './',  // Para GitHub Pages con subdirectorio
  // ...
})
```

Si tu repositorio se llama igual que tu usuario (e.g., `usuario.github.io`), usa:
```typescript
base: '/',
```

### Error 404 al acceder a rutas

**Problema:** Al navegar directamente a una ruta, aparece 404.

**Solución:** GitHub Pages no soporta SPA routing por defecto. Este proyecto usa anchors (`#`) que funcionan perfectamente sin configuración adicional.

### El workflow de GitHub Actions falla

**Problema:** El workflow muestra errores en la pestaña Actions.

**Soluciones:**

1. Verifica que GitHub Pages esté habilitado en Settings → Pages
2. Asegúrate de que el repositorio sea público o tengas GitHub Pro
3. Revisa que todos los permisos estén correctos en Settings → Actions → General → Workflow permissions

### No aparece la opción "GitHub Actions" en Pages

**Problema:** No ves la opción para usar GitHub Actions.

**Solución:**
- Asegúrate de que el repositorio sea público
- Si es privado, necesitas GitHub Pro o Enterprise
- Verifica que tengas permisos de administrador en el repositorio

---

## ✅ Verificación del Despliegue

Una vez desplegado, verifica que todo funcione correctamente:

- [ ] El sitio carga correctamente
- [ ] Todos los estilos se aplican (colores Blade Runner)
- [ ] Las imágenes se muestran correctamente
- [ ] La navegación funciona (enlaces del menú)
- [ ] El formulario de contacto muestra el mensaje de confirmación
- [ ] El sitio es responsive (prueba en móvil)
- [ ] El sitio tiene HTTPS (candado verde en el navegador)

---

## 📱 Compartir tu Portafolio

Una vez desplegado, puedes compartir tu portafolio de varias formas:

1. **URL directa:**
   ```
   https://TU_USUARIO.github.io/TU_REPOSITORIO/
   ```

2. **En tu perfil de GitHub:**
   - Ve a tu perfil
   - Edita tu perfil
   - Agrega el link en "Website"

3. **En tu README del repositorio:**
   ```markdown
   🌐 [Ver Portafolio en Vivo](https://TU_USUARIO.github.io/TU_REPOSITORIO/)
   ```

---

## 🎓 Entrega Académica

Para entregar este portafolio como trabajo académico:

1. **URL del sitio desplegado:**
   ```
   https://TU_USUARIO.github.io/TU_REPOSITORIO/
   ```

2. **URL del repositorio GitHub:**
   ```
   https://github.com/TU_USUARIO/TU_REPOSITORIO
   ```

3. **Capturas de pantalla:**
   - Toma capturas de las diferentes secciones
   - Incluye una captura del sitio en móvil

4. **Documentación:**
   - Incluye este README.md con las instrucciones
   - Menciona las tecnologías utilizadas
   - Describe el proceso de desarrollo

---

## 🆘 Ayuda Adicional

Si tienes problemas con el despliegue:

1. **Documentación oficial de GitHub Pages:**
   - [https://docs.github.com/pages](https://docs.github.com/pages)

2. **Documentación de Vite:**
   - [https://vitejs.dev/guide/static-deploy.html](https://vitejs.dev/guide/static-deploy.html)

3. **Comunidad:**
   - Stack Overflow con el tag `github-pages`
   - GitHub Community: [https://github.community](https://github.community)

---

## 📌 Checklist Final

Antes de considerar el deployment completo:

- [ ] El código está en GitHub
- [ ] GitHub Pages está habilitado
- [ ] El workflow de GitHub Actions funciona correctamente (o el despliegue manual está configurado)
- [ ] El sitio es accesible desde el navegador
- [ ] Todas las secciones se ven correctamente
- [ ] El sitio es responsive
- [ ] El sitio tiene HTTPS
- [ ] Has compartido la URL para entrega académica

---

¡Felicidades! Tu portafolio académico está ahora en línea y accesible públicamente. 🎉

**José Vicente Rodríguez Rivera - GearToTheEnd**  
CNO V - Seguridad Informática  
Universidad Politécnica de San Luis Potosí
