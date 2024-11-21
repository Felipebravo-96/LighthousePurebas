# Lighthouse CI Project

Este proyecto está diseñado para ejecutar auditorías automáticas de Lighthouse utilizando la herramienta [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci). Utiliza un archivo de configuración para ejecutar las pruebas en varias URLs, con la capacidad de agregar cookies necesarias para la autenticación.

## Requisitos previos

1. **Node.js**: Este proyecto utiliza Node.js para ejecutar Lighthouse CI. Asegúrate de tener instalado Node.js v18 o superior.
2. **Google Chrome**: La herramienta usa Google Chrome para ejecutar las auditorías.
3. **Variables de entorno**: Debes configurar las siguientes variables de entorno en un archivo `.env` o como secretos en tu repositorio de GitHub Actions:
   - `URLS`: Una lista de URLs separadas por comas, a las cuales se les ejecutará la auditoría.
   - `VTEX_ID_CLIENT_AUT_COOKIE`: El valor del cookie necesario para la autenticación en las URLs.

## Estructura del proyecto

- **lighthouserc.js**: Archivo de configuración para Lighthouse CI de manera local, especificando las URLs, el número de ejecuciones y la ruta de Chrome. 
- **lighthouserc-ci.js**: Archivo de configuración para Lighthouse CI para GitHub Actions, especificando las URLs, el número de ejecuciones y la ruta de Chrome.
- **package.json**: Contiene la configuración de las dependencias y scripts del proyecto.
- **set-cookie.js**: Script para configurar las cookies necesarias para la autenticación antes de ejecutar las auditorías.
- **lhci.yml**: Archivo de configuración para GitHub Actions, que automatiza la ejecución de Lighthouse CI en cada "push" al repositorio o cuando se despacha manualmente el flujo de trabajo.

## Instalación

### 1. Clona el repositorio
```bash
    git clone https://github.com/tu-usuario/lighthouse-ci.git
    cd lighthouse-ci 
```
### 2. Instala las dependencias
```bash
    npm install
```

## Configuración de GitHub Actions
Este proyecto incluye un flujo de trabajo de GitHub Actions que se ejecuta cada vez que se realiza un "push" a la rama main o cuando se despacha manualmente el flujo de trabajo. El flujo de trabajo realiza lo siguiente:

Instala las dependencias necesarias.
Instala Google Chrome.
Ejecuta Lighthouse CI utilizando el archivo de configuración lighthouserc.js.

### Variables de entorno en GitHub Secrets
Asegúrate de configurar los siguientes secretos en tu repositorio de GitHub:

`URLS:` Una lista de URLs que se evaluarán, por ejemplo: https://miweb.com,https://otraweb.com
`VTEX_ID_CLIENT_AUT_COOKIE:` El valor del cookie necesario para la autenticación.

### Uso

## 1. Ejecutar Lighthouse CI en local
Puedes ejecutar las auditorías de Lighthouse localmente con el siguiente comando:

```bash
npm run lhci:autorun
```
Este comando ejecutará el script de Lighthouse CI y generará un informe con las métricas de rendimiento, accesibilidad y mejores prácticas.

## 2. Ejecutar el flujo de trabajo en GitHub Actions
Cuando realices un "push" a la rama main, el flujo de trabajo de GitHub Actions se activará automáticamente y ejecutará las auditorías de Lighthouse CI. Los informes generados se cargarán en un almacenamiento público temporal para su visualización.

## Dependencias
Este proyecto utiliza las siguientes dependencias:

* @lhci/cli: La CLI de Lighthouse CI.
* dotenv: Para manejar las variables de entorno.
* puppeteer: Para interactuar con las páginas y configurar cookies.
