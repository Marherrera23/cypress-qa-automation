# Cypress QA Automation

Este repositorio contiene pruebas automatizadas con Cypress para validar flujos funcionales como login, formularios y navegación. Está orientado a demostrar habilidades QA en automatización, trazabilidad y buenas prácticas.

## 🧪 Casos cubiertos

| Caso | Descripción | Resultado esperado |
|------|-------------|--------------------|
| Login exitoso | Usuario válido accede correctamente | Redirección a /secure, mensaje de éxito |
| Logout exitoso | Usuario cierra sesión | Redirección a /login, mensaje de cierre |
| Login vacío | No se ingresan credenciales | Permanece en /login, mensaje de error |
| Login incorrecto | Credenciales inválidas | Permanece en /login, mensaje de error |

## 🚀 Cómo ejecutar las pruebas

1. Clona el repositorio  
   `git clone https://github.com/Marherene23/cypress-qa-automation.git`

2. Instala dependencias  
   `npm install`

3. Ejecuta Cypress  
   `npx cypress open`

## 📁 Estructura del proyecto
