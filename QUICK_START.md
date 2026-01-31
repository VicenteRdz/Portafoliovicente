# ⚡ Guía Rápida de Inicio

Esta es una guía rápida para poner en marcha tu portafolio académico.

---

## 🎯 En 5 Minutos

### 1️⃣ Instalar Dependencias

```bash
npm install
```

### 2️⃣ Ejecutar en Desarrollo

```bash
npm run dev
```

Abre tu navegador en: `http://localhost:5173`

### 3️⃣ Construir para Producción

```bash
npm run build
```

Los archivos estarán en la carpeta `/dist`.

---

## 🚀 Desplegar en GitHub Pages

### Método Rápido (Automático)

1. **Crea un repositorio en GitHub**

2. **Sube tu código:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Habilita GitHub Pages:**
   - Ve a: Settings → Pages
   - Source: GitHub Actions
   - ✅ Listo!

4. **Accede a tu sitio:**
   - `https://TU_USUARIO.github.io/TU_REPO/`

---

## 📝 Personalizar Contenido

### Cambiar Información Personal

Edita estos archivos:

**Header** → `/src/app/components/Header.tsx`
- Nombre
- Alias
- Asignatura
- Semestre

**Hero** → `/src/app/components/Hero.tsx`
- Título principal
- Subtítulo
- Información institucional

**Footer** → `/src/app/components/Footer.tsx`
- Información de copyright
- Enlaces sociales

### Cambiar Colores

Todos los colores están centralizados:

**Colores principales:**
- `#d4a574` → Sepia/Oro (texto principal)
- `#cc6633` → Naranja/Rojizo (acentos)
- `#0a0a0a` → Negro profundo (fondo)
- `#1a1a1a` → Gris oscuro (tarjetas)

Para cambiar globalmente, busca y reemplaza estos valores en todos los archivos de componentes.

---

## 🎨 Estructura de Colores

```css
/* Principales */
Texto principal: text-[#d4a574]
Acentos: text-[#cc6633]
Fondo: bg-[#0a0a0a]
Tarjetas: bg-[#1a1a1a]

/* Opacidades */
Texto secundario: text-[#d4a574]/80
Texto terciario: text-[#d4a574]/60
Bordes: border-[#d4a574]/20
```

---

## 📂 Estructura de Archivos

```
src/
├── app/
│   ├── components/
│   │   ├── Header.tsx          # Navegación superior
│   │   ├── Hero.tsx            # Banner principal
│   │   ├── Presentation.tsx    # Objetivo del portafolio
│   │   ├── Profile.tsx         # Perfil del estudiante
│   │   ├── TechnicalInfo.tsx   # Stack técnico
│   │   ├── ContactForm.tsx     # Formulario de contacto
│   │   └── Footer.tsx          # Pie de página
│   └── App.tsx                 # Componente principal
└── styles/
    ├── tailwind.css            # Estilos y animaciones
    └── theme.css               # Variables de tema
```

---

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción
npm run build        # Construir para producción
npm run preview      # Vista previa de producción

# Git
git status           # Ver cambios
git add .            # Agregar todos los cambios
git commit -m "msg"  # Hacer commit
git push             # Subir cambios
```

---

## ✨ Características Principales

- ✅ Diseño inspirado en Blade Runner 2049
- ✅ Colores sepia y naranja (Red Team)
- ✅ Responsive (móvil y desktop)
- ✅ Animaciones suaves
- ✅ Navegación con scroll suave
- ✅ Formulario de contacto con confirmación
- ✅ Optimizado para GitHub Pages
- ✅ HTTPS por defecto

---

## 🆘 Problemas Comunes

### El sitio no se ve correctamente en GitHub Pages

**Solución:** Verifica el `base` en `vite.config.ts`:
```typescript
base: './',  // Para repositorios normales
```

### Los estilos no se aplican

**Solución:** Asegúrate de ejecutar:
```bash
npm install
npm run build
```

### Error al hacer push

**Solución:** Verifica tu remote:
```bash
git remote -v
# Si no está configurado:
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
```

---

## 📚 Documentación Completa

Para más detalles, consulta:

- **README.md** → Información general del proyecto
- **DEPLOYMENT.md** → Guía completa de despliegue
- **package.json** → Dependencias y scripts

---

## 🎓 Información Académica

**Asignatura:** CNO V - Seguridad Informática  
**Institución:** Universidad Politécnica de San Luis Potosí  
**Estudiante:** José Vicente Rodríguez Rivera  
**Alias:** GearToTheEnd  
**Semestre:** Octavo

---

## 📞 Soporte

Si tienes problemas:

1. Revisa la documentación completa en README.md
2. Consulta DEPLOYMENT.md para problemas de despliegue
3. Verifica que todas las dependencias estén instaladas
4. Asegúrate de tener Node.js 18+ y npm actualizado

---

**¡Éxito con tu portafolio académico! 🚀**
