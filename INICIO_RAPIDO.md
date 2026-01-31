# 🚀 Guía Rápida - Subir a GitHub en 3 Pasos

## ✅ Lo que tienes:
- ✓ Archivo ZIP/TAR.GZ con todo el proyecto
- ✓ Código listo para usar
- ✓ Configuración completa

## 📦 Paso 1: Descargar y Descomprimir

1. Descarga el archivo `qamarero-installation-guide.zip`
2. Descomprímelo en tu computadora
3. Abre la carpeta `qamarero-installation-guide`

## 🔧 Paso 2: Probar Localmente (Opcional)

Abre una terminal en la carpeta del proyecto y ejecuta:

```bash
npm install
npm run dev
```

Abre http://localhost:5173 en tu navegador.

## 📤 Paso 3: Subir a GitHub

### Opción A: GitHub Desktop (Recomendado - Más Fácil)

1. Descarga e instala: https://desktop.github.com/
2. Abre GitHub Desktop e inicia sesión
3. `File > Add Local Repository` → Selecciona la carpeta del proyecto
4. Click en `Publish repository` (arriba a la derecha)
5. Elige si quieres que sea público o privado
6. ¡Listo! 🎉

### Opción B: Línea de Comandos

```bash
cd qamarero-installation-guide

# Inicializar repositorio
git init
git add .
git commit -m "Initial commit"

# Crear repositorio en GitHub.com primero, luego:
git remote add origin https://github.com/TU-USUARIO/qamarero-installation-guide.git
git branch -M main
git push -u origin main
```

---

## 🌐 BONUS: Publicar Online (GitHub Pages)

Para que cualquiera pueda acceder a la app desde un link:

1. En tu repositorio de GitHub: `Settings > Pages`
2. Source: `Deploy from a branch`
3. Branch: selecciona `main` → carpeta `/ (root)`
4. Click `Save`
5. Espera 1-2 minutos

Tu app estará en: `https://TU-USUARIO.github.io/qamarero-installation-guide/`

**Nota**: Si no funciona, necesitas hacer un pequeño ajuste en `vite.config.js` (ver archivo GITHUB_SETUP.md)

---

## 📖 Documentación Completa

Lee `GITHUB_SETUP.md` para instrucciones detalladas y solución de problemas.

## 🆘 ¿Problemas?

- Verifica que tienes Git instalado: `git --version`
- Verifica que tienes Node.js: `node --version`
- Lee los mensajes de error con atención

---

**Desarrollado para Qamarero** 🍽️
