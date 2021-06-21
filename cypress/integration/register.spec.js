// register.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// login.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

beforeEach(() => {
    cy.log('Next test')
    cy.visit("/signup")
  })

describe("Sign up tests", () => {

    it('Should sign up', () => {

        cy.get('input[name="email"]')
        .type('user1@user.com')
        .should('be.selected')
        .and('have.value', 'user1@user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password2"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password"]').then(ftsElement => {
            cy.get('input[name="passwor2"]').should('have.value', ftsElement.textContent.trim())
        })

        cy.get('input[name="firstName"]')
        .type('User')
        .should('be.selected')
        .and('have.value', 'User');

        cy.get('input[name="lastName"]')
        .type('Max')
        .should('be.selected')
        .and('have.value', 'Max');

        cy.get('input[name="register"]')
        .click();

        cy.url().should('contain', '/');
        cy.title().should('eq', 'MainPage');
    });


    it('Should not sign up - passwords not match', () => {

        cy.get('input[name="email"]')
        .type('user2@user.com')
        .should('be.selected')
        .and('have.value', 'user2@user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password2"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password"]').then(ftsElement => {
            cy.get('input[name="passwor2"]').should('have.value', ftsElement.textContent.trim())
        })

        cy.get('input[name="firstName"]')
        .type('User')
        .should('be.selected')
        .and('have.value', 'User');

        cy.get('input[name="lastName"]')
        .type('Max')
        .should('be.selected')
        .and('have.value', 'Max');

        cy.get('input[name="register"]')
        .click();

        cy.url().should('contain', '/signup');
        cy.get(".error").should('be.visible');
        cy.get(".error").should('have.text',"Passwords not match.")
        cy.get('input[name="password"]').should('have.css', 'color', 'red');
        cy.get('input[name="password2"]').should('have.css', 'color', 'red');
    });

    it('Should not sign up - no name and surname', () => {

        cy.get('input[name="email"]')
        .type('user2@user.com')
        .should('be.selected')
        .and('have.value', 'user2@user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password2"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password"]').then(ftsElement => {
            cy.get('input[name="passwor2"]').should('have.value', ftsElement.textContent.trim())
        })

        cy.get('input[name="register"]')
        .click();

        cy.url().should('contain', '/signup');
        cy.get(".error").should('be.visible');
        cy.get(".error").should('have.text',"Set firtsName and lastName.")
        cy.get('input[name="firstName"]').should('have.css', 'color', 'red');
        cy.get('input[name="lastName"]').should('have.css', 'color', 'red');
    });

    it('Should not sign up - email exist', () => {

        cy.get('input[name="email"]')
        .type('user3@user.com')
        .should('be.selected')
        .and('have.value', 'user3@user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password2"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password"]').then(ftsElement => {
            cy.get('input[name="passwor2"]').should('have.value', ftsElement.textContent.trim())
        })

        cy.get('input[name="firstName"]')
        .type('User')
        .should('be.selected')
        .and('have.value', 'User');

        cy.get('input[name="lastName"]')
        .type('Max')
        .should('be.selected')
        .and('have.value', 'Max');

        cy.get('input[name="register"]')
        .click();

        cy.url().should('contain', '/signup');
        cy.get(".error").should('be.visible');
        cy.get(".error").should('have.text',"Email exist.")
    });

    it('Should not sign up - invalid email', () => {

        cy.get('input[name="email"]')
        .type('user4user.com')
        .should('be.selected')
        .and('have.value', 'user4user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password2"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password"]').then(ftsElement => {
            cy.get('input[name="passwor2"]').should('have.value', ftsElement.textContent.trim())
        })

        cy.get('input[name="firstName"]')
        .type('User')
        .should('be.selected')
        .and('have.value', 'User');

        cy.get('input[name="lastName"]')
        .type('Max')
        .should('be.selected')
        .and('have.value', 'Max');

        cy.get('input[name="register"]')
        .click();

        cy.url().should('contain', '/signup');
        cy.get(".error").should('be.visible');
        cy.get('input[name="email"]').should('have.css', 'color', 'red');
        cy.get(".error").should('have.text',"Invalid email")
    });

    it('Should not sign up - password is to short', () => {

        cy.get('input[name="email"]')
        .type('user5@user.com')
        .should('be.selected')
        .and('have.value', 'user5%user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password2"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password"]').then(ftsElement => {
            cy.get('input[name="passwor2"]').should('have.value', ftsElement.textContent.trim())
        })

        cy.get('input[name="firstName"]')
        .type('User')
        .should('be.selected')
        .and('have.value', 'User');

        cy.get('input[name="lastName"]')
        .type('Max')
        .should('be.selected')
        .and('have.value', 'Max');

        cy.get('input[name="register"]')
        .click();

        cy.url().should('contain', '/signup');
        cy.get(".error").should('be.visible');
        cy.get('input[name="password"]').should('have.css', 'color', 'red');
        cy.get('input[name="password2"]').should('have.css', 'color', 'red');
        cy.get(".error").should('have.text',"Password is too short - set min 8 characters")
    });

    it('Should not sign up - password is to weak', () => {

        cy.get('input[name="email"]')
        .type('user5@user.com')
        .should('be.selected')
        .and('have.value', 'user5%user.com');

        cy.get('input[name="password"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password2"]')
        .type('Qwerty!1')
        .should('be.selected')
        .and('have.value', 'Qwerty!1');

        cy.get('input[name="password"]').then(ftsElement => {
            cy.get('input[name="passwor2"]').should('have.value', ftsElement.textContent.trim())
        })

        cy.get('input[name="password"]')
			.type('Qwerty!1')
			.should('have.value', 'Qwerty')
			.should('match', /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);


        cy.get('input[name="firstName"]')
        .type('User')
        .should('be.selected')
        .and('have.value', 'User');

        cy.get('input[name="lastName"]')
        .type('Max')
        .should('be.selected')
        .and('have.value', 'Max');

        cy.get('input[name="register"]')
        .click();

        cy.url().should('contain', '/signup');
        cy.get(".error").should('be.visible');
        cy.get('input[name="password"]').should('have.css', 'color', 'red');
        cy.get('input[name="password2"]').should('have.css', 'color', 'red');
        cy.get(".error").should('have.text',"Password is too weak- set min 8 characters, at least one letters, number and special character")
    });


});