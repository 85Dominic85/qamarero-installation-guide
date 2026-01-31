# 🍽️ Qamarero - Guía de Instalación Interactiva

Aplicación web React para guiar a los clientes de Qamarero en la instalación física de sus equipos de punto de venta.

![Qamarero Installation Guide](https://img.shields.io/badge/version-1.0.0-orange)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3.2-38bdf8)

## 📋 Características

- ✨ **Diseño Premium**: Estética Apple/Fintech con animaciones suaves
- 📱 **Responsive**: Mobile-first, funciona en todos los dispositivos
- 🎯 **8 Pasos Guiados**: Desde inventario hasta contacto con el Account Manager
- 🎨 **Hardware Visual**: Ilustraciones de dispositivos creadas con CSS
- ✅ **Checklist Interactivo**: Verificación final de equipos
- 🔄 **Navegación Fluida**: Barra de progreso y transiciones suaves

## 🚀 Instalación

### Prerequisitos

- Node.js (v16 o superior)
- npm o yarn

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/qamarero-installation-guide.git
cd qamarero-installation-guide
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

## 📦 Estructura del Proyecto

```
qamarero-installation-guide/
├── src/
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Paleta de Colores

- **Naranja Principal**: `#F97316`
- **Fondos**: `Slate-50` / Blanco
- **Textos**: `Slate-900` (títulos), `Slate-500` (descripciones)
- **Estados**: Verde para éxito, Rojo para advertencias

## 📱 Pasos de la Guía

1. **Bienvenida**: Introducción al proceso
2. **Inventario**: Identificación de los 5 equipos
3. **Internet y WiFi**: Conexión del Router Opal
4. **Red WiFi**: Verificación de red "Qamarero2.4G"
5. **TPV**: Conexión del punto de venta táctil
6. **Cableado**: Conexión de impresora y cajón
7. **Verificación**: Checklist de luces y conexiones
8. **Contacto**: Opciones para contactar con el Account Manager

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework principal
- **Tailwind CSS**: Estilos y diseño
- **Lucide React**: Iconos
- **Vite**: Build tool y desarrollo

## 🎯 Uso

La aplicación está diseñada para ser usada por clientes de Qamarero durante la instalación física de sus equipos. Cada paso proporciona:

- Instrucciones claras y visuales
- Ilustraciones de hardware
- Advertencias importantes
- Verificación de estado

## 📄 Licencia

Este proyecto es propiedad de Qamarero.

## 👥 Contacto

Para más información sobre los productos Qamarero, visita [www.qamarero.com](https://www.qamarero.com)

---

Desarrollado con ❤️ para Qamarero
