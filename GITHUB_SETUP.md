# 📤 Instrucciones para Subir a GitHub

## Opción 1: Usando GitHub Desktop (Más Fácil)

1. **Descarga GitHub Desktop**: https://desktop.github.com/
2. **Instala y abre GitHub Desktop**
3. **Inicia sesión** con tu cuenta de GitHub
4. **File > Add Local Repository** y selecciona la carpeta `qamarero-installation-guide`
5. **Publish repository** en la esquina superior derecha
6. Marca la opción "Keep this code private" si quieres que sea privado
7. Click en **Publish repository**

¡Listo! Tu proyecto ya está en GitHub.

---

## Opción 2: Usando Git en Terminal

### Paso 1: Instalar Git (si no lo tienes)
- **Windows**: https://git-scm.com/download/win
- **Mac**: Viene preinstalado o usa `brew install git`
- **Linux**: `sudo apt-get install git`

### Paso 2: Configurar Git (primera vez)
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### Paso 3: Inicializar el Repositorio Local
```bash
cd qamarero-installation-guide
git init
git add .
git commit -m "Initial commit: Qamarero Installation Guide"
```

### Paso 4: Crear Repositorio en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `qamarero-installation-guide`
3. Descripción: "Guía de instalación interactiva para equipos Qamarero"
4. Elige **Privado** o **Público**
5. **NO** marques "Add README" (ya tenemos uno)
6. Click en **Create repository**

### Paso 5: Conectar y Subir
GitHub te mostrará unos comandos. Copia y ejecuta:

```bash
git remote add origin https://github.com/TU-USUARIO/qamarero-installation-guide.git
git branch -M main
git push -u origin main
```

**¡Importante!** Reemplaza `TU-USUARIO` con tu nombre de usuario de GitHub.

### Verificación
Visita: `https://github.com/TU-USUARIO/qamarero-installation-guide`

---

## Opción 3: Deploy en GitHub Pages (Hosting Gratis)

Si quieres que la aplicación esté disponible online:

### 1. Añade esto a `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/qamarero-installation-guide/',  // 👈 Añade esta línea
  // ... resto del código
})
```

### 2. Instala gh-pages:
```bash
npm install --save-dev gh-pages
```

### 3. Añade estos scripts a `package.json`:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d dist"  // 👈 Añade esta línea
}
```

### 4. Sube los cambios a GitHub:
```bash
git add .
git commit -m "Configure for GitHub Pages"
git push
```

### 5. Deploy:
```bash
npm run deploy
```

### 6. Activa GitHub Pages:
1. Ve a tu repositorio en GitHub
2. Settings > Pages
3. Source: selecciona "gh-pages" branch
4. Click **Save**

Tu app estará disponible en:
`https://TU-USUARIO.github.io/qamarero-installation-guide/`

---

## 🔄 Para Actualizar el Código Después

```bash
git add .
git commit -m "Descripción de los cambios"
git push
```

Si usas GitHub Pages, después ejecuta:
```bash
npm run deploy
```

---

## ❓ Ayuda

Si tienes problemas:
1. Verifica que Git esté instalado: `git --version`
2. Verifica tu conexión a GitHub: `git remote -v`
3. Si pide autenticación, usa un Personal Access Token (no tu contraseña):
   - GitHub > Settings > Developer Settings > Personal Access Tokens

---

## 📞 Soporte

¿Necesitas ayuda? Contacta con tu Account Manager de Qamarero.
