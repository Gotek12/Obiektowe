// add_product.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// add.spec.js created with Cypress
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
    cy.visit("/addproduct")
  })

describe("Add product tests", () => {

    it('Should add product', () => {

        cy.get('input[name="name"]')
        .type('RTX 380')
        .should('be.selected')
        .and('have.value', 'RTX 380');

        cy.get('input[name="category"]')
        .type('Elektronika')
        .should('be.selected')
        .and('have.value', 'Elektronika');

        cy.get('input[name="price"]')
        .type('7000')
        .should('be.selected')
        .and('have.value', '7000');

        cy.get('input[name="fileName"]')
        .and('have.value', 'rtx.png');

        cy.get('input[name="add"]')
        .click();

        cy.get(".info").should('have.text',"Added new product")

        cy.url().should('contain', '/addproduct');
        cy.title().should('eq', 'AddProduct');
    });

    it('Should add product with details', () => {

        cy.get('input[name="name"]')
        .type('RTX 3080')
        .should('be.selected')
        .and('have.value', 'RTX 3080');

        cy.get('input[name="category"]')
        .type('Elektronika')
        .should('be.selected')
        .and('have.value', 'Elektronika');

        cy.get('input[name="price"]')
        .type('7000')
        .should('be.selected')
        .and('have.value', '7000');

        cy.get('input[name="description"]')
        .type('Wydajna karta NVIDIA 3080 ...')
        .should('be.selected')
        .and('have.value', 'Wydajna karta NVIDIA 3080 ...');

        cy.get('input[name="weight"]')
        .type('1.5kg')
        .should('be.selected')
        .and('have.value', '1.5kg');

        cy.get('input[name="fileName"]')
        .and('have.value', 'rtx.png');

        cy.get('input[name="add"]')
        .click();

        cy.get(".info").should('have.text',"Added new product")

        cy.url().should('contain', '/addproduct');
        cy.title().should('eq', 'AddProduct');
    });


    it('Should not add product - no product name', () => {

        cy.get('input[name="category"]')
        .type('Elektronika')
        .should('be.selected')
        .and('have.value', 'Elektronika');

        cy.get('input[name="price"]')
        .type('7000')
        .should('be.selected')
        .and('have.value', '7000');

        cy.get('input[name="description"]')
        .type('Wydajna karta NVIDIA 3080 ...')
        .should('be.selected')
        .and('have.value', 'Wydajna karta NVIDIA 3080 ...');

        cy.get('input[name="weight"]')
        .type('1.5kg')
        .should('be.selected')
        .and('have.value', '1.5kg');

        cy.get('input[name="fileName"]')
        .and('have.value', 'rtx.png');

        cy.get('input[name="add"]')
        .click();

        cy.get('input[name="name"]')
        .should('not.have.value', 'RTX 3070');

        cy.url().should('contain', '/addproduct');
        cy.title().should('eq', 'AddProduct');
        cy.get('input[name="name"]').should('have.css', 'color', 'red');
        cy.get(".error").should('have.text',"Brak nazwy produktu")
    });

    it('Should not add product - no product price', () => {

        cy.get('input[name="name"]')
        .type('RTX 3')
        .should('be.selected')
        .and('have.value', 'RTX 3');

        cy.get('input[name="price"]')
        .type('7000')
        .should('be.selected')
        .and('have.value', '7000');

        cy.get('input[name="description"]')
        .type('Wydajna karta NVIDIA 3080 ...')
        .should('be.selected')
        .and('have.value', 'Wydajna karta NVIDIA 3080 ...');

        cy.get('input[name="weight"]')
        .type('1.5kg')
        .should('be.selected')
        .and('have.value', '1.5kg');

        cy.get('input[name="fileName"]')
        .and('have.value', 'rtx.png');

        cy.get('input[name="add"]')
        .click();

        cy.get('input[name="price"]')
        .should('not.have.value', '7000');

        cy.url().should('contain', '/addproduct');
        cy.title().should('eq', 'AddProduct');
        cy.get('input[name="price"]').should('have.css', 'color', 'red');
        cy.get(".error").should('have.text',"Brak ceny produktu")
    });

    it('Should not add product - no product category', () => {

        cy.get('input[name="name"]')
        .type('RTX 30')
        .should('be.selected')
        .and('have.value', 'RTX 30');

        cy.get('input[name="price"]')
        .type('7000')
        .should('be.selected')
        .and('have.value', '7000');

        cy.get('input[name="description"]')
        .type('Wydajna karta NVIDIA 3080 ...')
        .should('be.selected')
        .and('have.value', 'Wydajna karta NVIDIA 3080 ...');

        cy.get('input[name="weight"]')
        .type('1.5kg')
        .should('be.selected')
        .and('have.value', '1.5kg');

        cy.get('input[name="fileName"]')
        .and('have.value', 'rtx.png');

        cy.get('input[name="add"]')
        .click();

        cy.get('input[name="category"]')
        .should('not.have.value', 'Elektronika');

        cy.url().should('contain', '/addproduct');
        cy.title().should('eq', 'AddProduct');
        cy.get('input[name="price"]').should('have.css', 'color', 'red');
        cy.get(".error").should('have.text',"Brak kategorii produktu")
    });

    it('Should not add product - price is not a number', () => {

        cy.get('input[name="name"]')
        .type('RTX 38000000')
        .should('be.selected')
        .and('have.value', 'RTX 38000000');

        cy.get('input[name="category"]')
        .type('Elektronika')
        .should('be.selected')
        .and('have.value', 'Elektronika');

        cy.get('input[name="price"]')
        .type('-7000xxs')
        .should('match', /^\d*(\.\d+)?$/);



        cy.get('input[name="fileName"]')
        .and('have.value', 'rtx.png');

        cy.get('input[name="add"]')
        .click();

        cy.url().should('contain', '/addproduct');
        cy.title().should('eq', 'AddProduct');
        cy.get('input[name="price"]').should('have.css', 'color', 'red');
        cy.get(".error").should('have.text',"Cena nie jest liczbą")
    });

    it('Should not add product - price is too small', () => {

        cy.get('input[name="name"]')
        .type('RTX 38000000')
        .should('be.selected')
        .and('have.value', 'RTX 38000000');

        cy.get('input[name="category"]')
        .type('Elektronika')
        .should('be.selected')
        .and('have.value', 'Elektronika');

        cy.get('input[name="price"]')
        .type('-7')
        .should('match', /^(([1-9]+([.][0-9]+)?)|(0[.][0-9]*[1-9]))$/gm);

        cy.get('input[name="fileName"]')
        .and('have.value', 'rtx.png');

        cy.get('input[name="add"]')
        .click();

        cy.url().should('contain', '/addproduct');
        cy.title().should('eq', 'AddProduct');
        cy.get('input[name="price"]').should('have.css', 'color', 'red');
        cy.get(".error").should('have.text',"Cena musi być większa niż 0")
    });


});