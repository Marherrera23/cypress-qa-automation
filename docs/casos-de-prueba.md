# 🧪 Casos de prueba: Login funcional

Este conjunto de pruebas automatiza el flujo de login en [the-internet.herokuapp.com/login](https://the-internet.herokuapp.com/login), validando distintos escenarios funcionales.

---
```gherkin

## ✅ Escenario 1: Login exitoso
Feature: Login funcional

  Scenario: Usuario accede correctamente
    Given el usuario está en la página de login
    When ingresa credenciales válidas y envía el formulario
    Then accede al área segura y ve el mensaje de éxito

## ✅ Escenario 2: Logout exitoso
Scenario: Usuario cierra sesión correctamente
  Given el usuario está logueado
  When hace clic en el botón de logout
  Then regresa a la página de login y ve el mensaje de cierre de sesión

## ❌ Escenario 3: Login fallido con campos vacíos
Scenario: Usuario intenta loguearse sin ingresar datos
  Given el usuario está en la página de login
  When envía el formulario vacío
  Then permanece en login y ve mensaje de error

❌ Escenario 4: Login fallido con credenciales incorrectas
Scenario: Usuario ingresa credenciales inválidas
  Given el usuario está en la página de login
  When ingresa datos incorrectos y envía el formulario
  Then permanece en login y ve mensaje de error
