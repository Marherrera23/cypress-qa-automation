describe('login funcional', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/login');
  });

  it('Validar login exitoso', () => {
    cy.log('Validar que se muestre el título');
    cy.get('h2').should('contain.text', 'Login Page');

    cy.log('Ingresar usuario');
    cy.get('#username').type('tomsmith');

    cy.log('Ingresar contraseña');
    cy.get('#password').type('SuperSecretPassword!');

    cy.log('Hacer click en botón');
    cy.get('#login').submit();

    cy.log('Validar cambio de la URL');
    cy.url().should('include', '/secure');

    cy.log('Validar mensajes');
    cy.get('#flash').should('contain.text', 'You logged into a secure area!');
    cy.get('h2').should('contain.text', 'Secure Area');
    cy.get('.subheader').should('contain.text', 'Welcome to the Secure Area. When you are done click logout below.');
    cy.get('.large-4 > div').should('contain.text', 'Powered by Elemental Selenium');
    cy.get('img').should('be.visible');
  });

  it('Validar logout exitoso', () => {
    cy.log('Realizar login previo');
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('#login').submit();

    cy.log('Hacer clic en botón de Salir');
    cy.get('.icon-2x').click();

    cy.log('Validar el cambio de URL');
    cy.url().should('include', '/login');

    cy.log('Validar mensaje de cierre de sesión');
    cy.get('#flash').should('contain.text', 'You logged out of the secure area!');

  });

  it('Validar login fallido con campos vacíos', () => {
  cy.log('Validar que se muestre el título');
  cy.get('h2').should('contain.text', 'Login Page');

  cy.log('Dejar campos vacíos y enviar');
  cy.get('#login').submit();

  cy.log('Validar que no se redirige');
  cy.url().should('include', '/login');

  cy.log('Validar mensaje de error');
  cy.get('#flash')
    .should('contain.text', 'Your username is invalid!')
    .and('have.class', 'flash error');
});

it('Validar login fallido con credenciales incorrectas', () => {
  cy.log('Ingresar usuario incorrecto');
  cy.get('#username').type('usuarioIncorrecto');

  cy.log('Ingresar contraseña incorrecta');
  cy.get('#password').type('claveIncorrecta');

  cy.log('Enviar formulario');
  cy.get('#login').submit();

  cy.log('Validar que no se redirige');
  cy.url().should('include', '/login');

  cy.log('Validar mensaje de error');
  cy.get('#flash')
    .should('contain.text', 'Your username is invalid!')
    .and('have.class', 'flash error');
});

});
