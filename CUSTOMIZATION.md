# 🎨 Guía de Personalización

Esta guía te ayudará a personalizar y expandir tu portafolio académico.

---

## 📝 Cambiar Información Personal

### Header (Encabezado)

**Archivo:** `/src/app/components/Header.tsx`

```tsx
// Cambiar nombre y alias
<span className="...">Tu Nombre Completo</span>
<span className="...">TuAlias</span>

// Cambiar información del curso
<span className="...">Tu Asignatura</span>
<span className="...">Tu Semestre</span>
```

### Hero (Banner Principal)

**Archivo:** `/src/app/components/Hero.tsx`

```tsx
// Cambiar información institucional
<span>Tu Universidad</span>
<span>Tu Semestre</span>
<span>Tu Nombre</span>
```

### Footer (Pie de Página)

**Archivo:** `/src/app/components/Footer.tsx`

```tsx
// Cambiar enlaces sociales
<a href="https://github.com/TU_USUARIO">...</a>
<a href="https://linkedin.com/in/TU_PERFIL">...</a>
<a href="mailto:TU_EMAIL@example.com">...</a>
```

---

## 🎨 Personalizar Colores

### Paleta Actual (Blade Runner 2049)

```css
/* Colores principales */
#d4a574  /* Sepia/Oro - Texto principal */
#cc6633  /* Naranja/Rojizo - Acentos */
#0a0a0a  /* Negro profundo - Fondo */
#1a1a1a  /* Gris oscuro - Tarjetas */
```

### Cambiar a una Paleta Personalizada

1. **Buscar y Reemplazar:**
   - Usa tu editor para buscar `#d4a574` y reemplazar con tu color principal
   - Busca `#cc6633` y reemplazar con tu color de acento
   - Busca `#0a0a0a` y reemplazar con tu color de fondo

2. **Actualizar en todos los componentes:**
   - Header.tsx
   - Hero.tsx
   - Presentation.tsx
   - Profile.tsx
   - TechnicalInfo.tsx
   - ContactForm.tsx
   - Footer.tsx

3. **Actualizar estilos CSS:**
   - `/src/styles/tailwind.css` (scrollbar y selection)

### Paletas Alternativas Sugeridas

#### Paleta Azul Cibernético (Blue Cyberpunk)
```css
#4dd0e1  /* Cian brillante - Principal */
#0091ea  /* Azul eléctrico - Acento */
#0a0a12  /* Azul muy oscuro - Fondo */
#1a1a2e  /* Azul oscuro - Tarjetas */
```

#### Paleta Verde Matrix
```css
#00ff41  /* Verde neón - Principal */
#008f11  /* Verde oscuro - Acento */
#000000  /* Negro puro - Fondo */
#0d0d0d  /* Negro carbón - Tarjetas */
```

#### Paleta Púrpura Hacker
```css
#c792ea  /* Púrpura claro - Principal */
#7c4dff  /* Púrpura vibrante - Acento */
#0a0a0f  /* Negro azulado - Fondo */
#1e1e2e  /* Gris púrpura - Tarjetas */
```

---

## 🖼️ Cambiar Imágenes

### Hero Background

**Archivo:** `/src/app/components/Hero.tsx`

```tsx
// Opción 1: Usar Unsplash (busca imágenes similares)
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

<ImageWithFallback
  src="https://images.unsplash.com/photo-XXXXXXX"
  alt="Tu descripción"
  className="..."
/>

// Opción 2: Usar imagen local
// 1. Coloca tu imagen en /public/images/
// 2. Referencia: src="/images/tu-imagen.jpg"
```

### Buscar Nuevas Imágenes

Sitios recomendados:
- [Unsplash](https://unsplash.com) - Fotos gratuitas de alta calidad
- [Pexels](https://pexels.com) - Videos y fotos gratuitas
- [Pixabay](https://pixabay.com) - Imágenes y vectores

Términos de búsqueda sugeridos:
- "cybersecurity dark"
- "hacker code matrix"
- "digital security network"
- "cyber attack background"

---

## ➕ Agregar Nuevas Secciones

### Paso 1: Crear el Componente

Crea un nuevo archivo: `/src/app/components/TuNuevaSeccion.tsx`

```tsx
export function TuNuevaSeccion() {
  return (
    <section className="py-16 sm:py-24 bg-black/95 relative">
      {/* Línea decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#cc6633] to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de sección */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#cc6633]"></div>
            <span className="text-sm font-mono text-[#cc6633] tracking-widest uppercase">
              Título de Sección
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-mono text-[#d4a574]">
            Tu Título Principal
          </h2>
        </div>

        {/* Tu contenido aquí */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Tarjetas, texto, etc. */}
        </div>
      </div>

      {/* Línea decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent"></div>
    </section>
  );
}
```

### Paso 2: Importar en App.tsx

**Archivo:** `/src/app/App.tsx`

```tsx
import { TuNuevaSeccion } from '@/app/components/TuNuevaSeccion';

export default function App() {
  return (
    <div className="...">
      {/* ... componentes existentes ... */}
      <TuNuevaSeccion />
      {/* ... más componentes ... */}
    </div>
  );
}
```

### Paso 3: Agregar al Menú de Navegación

**Archivo:** `/src/app/components/Header.tsx`

```tsx
const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#evidencias', label: 'Evidencias' },
  { href: '#tu-nueva-seccion', label: 'Tu Sección' }, // ← Agregar aquí
  // ... otros enlaces
];
```

---

## 🎭 Componentes de UI Reutilizables

### Tarjeta con Borde Glow

```tsx
<div className="p-6 bg-[#1a1a1a]/50 border border-[#d4a574]/20 hover:border-[#cc6633]/50 transition-all duration-300">
  {/* Contenido */}
</div>
```

### Tarjeta con Esquinas Brackets

```tsx
<div className="relative p-8 bg-[#1a1a1a]/30 border border-[#d4a574]/20">
  {/* Esquinas decorativas */}
  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#cc6633]/50"></div>
  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#cc6633]/50"></div>
  
  {/* Contenido */}
</div>
```

### Lista con Flechas

```tsx
<ul className="space-y-2">
  <li className="flex items-start gap-2 text-sm font-mono text-[#d4a574]/70">
    <span className="text-[#cc6633]">›</span>
    <span>Tu item de lista</span>
  </li>
</ul>
```

### Tag/Badge

```tsx
<span className="px-3 py-1 text-xs font-mono bg-[#cc6633]/10 border border-[#cc6633]/30 text-[#cc6633]">
  Tu Tag
</span>
```

---

## 🎬 Agregar Animaciones

### Animaciones Disponibles

```tsx
// Fade in
<div className="animate-fade-in">...</div>

// Spin lento (para círculos)
<div className="animate-spin-slow">...</div>

// Glow pulse
<div className="animate-glow-pulse">...</div>

// Pulse de Tailwind
<div className="animate-pulse">...</div>
```

### Crear Animación Personalizada

**Archivo:** `/src/styles/tailwind.css`

```css
/* Agregar keyframe */
@keyframes tu-animacion {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Agregar clase de utilidad */
.animate-tu-animacion {
  animation: tu-animacion 2s ease-in-out infinite;
}
```

**Usar en componente:**

```tsx
<div className="animate-tu-animacion">...</div>
```

---

## 📱 Iconos

### Usar Lucide Icons

Ya instalado en el proyecto. Importa así:

```tsx
import { IconName } from 'lucide-react';

// Usar en JSX
<IconName className="w-5 h-5 text-[#cc6633]" />
```

Iconos útiles para seguridad:
- `Shield`, `Lock`, `Key`, `ShieldAlert`
- `Terminal`, `Code2`, `Binary`
- `Activity`, `AlertTriangle`, `Eye`
- `Server`, `Database`, `HardDrive`
- `Github`, `Mail`, `Linkedin`

Ver todos en: [lucide.dev](https://lucide.dev)

---

## 📊 Agregar Gráficos y Estadísticas

El proyecto ya incluye **Recharts**. Ejemplo básico:

```tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Ene', valor: 400 },
  { name: 'Feb', valor: 300 },
  // ... más datos
];

export function GraficoEjemplo() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#d4a574" opacity={0.1} />
        <XAxis dataKey="name" stroke="#d4a574" />
        <YAxis stroke="#d4a574" />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1a1a1a', 
            border: '1px solid #cc6633' 
          }} 
        />
        <Line type="monotone" dataKey="valor" stroke="#cc6633" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  );
}
```

---

## 🌐 Modificar el Footer

### Agregar Más Enlaces Sociales

**Archivo:** `/src/app/components/Footer.tsx`

```tsx
// Agregar Twitter
<a
  href="https://twitter.com/TU_USUARIO"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 text-xs font-mono text-[#d4a574]/60 hover:text-[#cc6633] transition-colors duration-300"
>
  <Twitter className="w-4 h-4" />
  <span>Twitter</span>
</a>
```

### Agregar Sección al Footer

```tsx
<div className="space-y-4">
  <h3 className="text-sm font-mono text-[#d4a574] uppercase tracking-wider">
    Tu Nueva Sección
  </h3>
  <div className="space-y-2">
    {/* Contenido */}
  </div>
</div>
```

---

## 🔧 Tips Avanzados

### 1. Agregar Modo Oscuro/Claro

El proyecto ya usa tonos oscuros. Para agregar alternancia:

```tsx
import { useState } from 'react';

const [darkMode, setDarkMode] = useState(true);

<button onClick={() => setDarkMode(!darkMode)}>
  Toggle Theme
</button>
```

### 2. Agregar Efectos de Hover Personalizados

```tsx
<div className="group hover:scale-105 transition-transform duration-300">
  <div className="opacity-0 group-hover:opacity-100">
    {/* Aparece al hover */}
  </div>
</div>
```

### 3. Agregar Loading State

```tsx
const [loading, setLoading] = useState(false);

{loading ? (
  <div className="animate-pulse">Cargando...</div>
) : (
  <div>Contenido</div>
)}
```

---

## 📚 Recursos Útiles

### Documentación
- [React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide Icons](https://lucide.dev)
- [Recharts](https://recharts.org)

### Tutoriales
- [Tailwind UI Components](https://tailwindui.com)
- [React Patterns](https://reactpatterns.com)

### Herramientas
- [Coolors](https://coolors.co) - Generador de paletas
- [CSS Gradient](https://cssgradient.io) - Generador de gradientes
- [Cubic Bezier](https://cubic-bezier.com) - Curvas de animación

---

¡Personaliza tu portafolio y hazlo único! 🎨✨

**José Vicente Rodríguez Rivera - GearToTheEnd**
