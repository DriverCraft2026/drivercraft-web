# Publicar DriverCraft Web

Configuración para Netlify:

- Build command: `npm ci --no-audit --no-fund --progress=false --ignore-scripts && npm run build`
- Publish directory: `out`
- Node: `22`

Comandos locales:

```powershell
cd C:\Dev\drivercraft-web
npm install
npm run build
git add .
git commit -m "Actualizar web DriverCraft"
git push
```

Si Netlify se queda instalando, revisa que exista este archivo `netlify.toml` en GitHub.
