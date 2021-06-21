// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

beforeEach(() => {
    cy.log('Next test')
    cy.visit("/signin")
  })

describe("Sign in tests", () => {

    it('Should log in with email and password', () => {

        cy.get('input[name="email"]')
        .type('testuser@user.com')
        .should('be.selected')
        .and('have.value', 'testuser@user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="login"]')
        .click();

        cy.url().should('contain', '/');
        cy.get('.username')
        .should('Welcome testuser@user.com!');
    });

    it('Should log in with oAuth - google', () => {

        cy.get('input[name="auth_google"]')
        .click();

        cy.url().should('contain', '/');

        cy.getCookie('user_name')
        .should('have.property', 'value', 'testuser@gmail.com')

        cy.get('.username')
        .should('Welcome testuser@gmail.com!');
    });

    it('Should not log in because the account not activated', () => {
       
        cy.get('input[name="email"]')
        .type('testuser@user.com')
        .should('be.selected')
        .and('have.value', 'testuser@user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="login"]')
        .click();

        cy.url().should('contain', '/signin');
        cy.get(".error").should('be.visible');
        cy.get(".error").should('have.text',"Twoje konto nie zostało aktywowane.")
    });

    it('Should not log in because incorrect password/email ', () => {
       
        cy.get('input[name="email"]')
        .type('testuser@user.com')
        .should('be.selected')
        .and('have.value', 'testuser@user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="login"]')
        .click();

        cy.url().should('contain', '/signin');
        cy.get(".error").should('be.visible');
        cy.get('.error').should('have.css', 'color', 'blue');
        cy.get(".error").should('have.text',"Błędne dane.");
    });

    it('Should not log in because account is blocked', () => {
       
        cy.get('input[name="email"]')
        .type('testuser@user.com')
        .should('be.selected')
        .and('have.value', 'testuser@user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="login"]')
        .click();

        cy.url().should('contain', '/signin');
        cy.get(".error_blocked").should('be.visible');
        cy.get('.error_blocked').should('have.css', 'color', 'red');
        cy.get(".error_blocked").should('have.text',"Konto zostało zablokowane.");
    });

    it('Should not log in - connection error', () => {
       
        cy.get('input[name="email"]')
        .type('testuser@user.com')
        .should('be.selected')
        .and('have.value', 'testuser@user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="login"]')
        .click();

        cy.url().should('contain', '/signin');
        cy.get(".error_connection").should('be.visible');
        cy.get('.error_connection').should('have.css', 'color', 'blue');
        cy.get(".error_connection").should('have.text',"Connection error.");

        cy.get(".info").should('have.text',"Proszę kontaktować się pod eamil: error_wtf@er.com");
    });

});