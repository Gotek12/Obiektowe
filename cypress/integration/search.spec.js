// search.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

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
    cy.visit("/products")
  })

describe("Search products", () => {

    it('Should print all product -  search without data', () => {

        cy.get('input[name="search-bar"]')
        .should('have.value', '');

        cy.get('input[name="search"]')
        .click();

        cy.get('ul').should('have.length', 10);

        cy.get('.page').then( items => {
            expect(items[0]).to.contains.text('RTX 3080')
            expect(items[1]).to.contains.text('RTX 3070')
            expect(items[2]).to.contains.text('RTX 3060')
            expect(items[4]).to.contains.text('PC 2 0')
            expect(items[8]).to.contains.text('SAMSUNG GALAXY S22 ULTRA')
        })

        cy.url().should('contain', '/products');
        cy.title().should('eq', 'Products');
    
    });

    it('First item should be RTX 3080', () => {

        cy.get('input[name="search-bar"]')
        .should('have.value', '');

        cy.get('input[name="search"]')
        .click();

        cy.get('.page')
        .eq(0)
        .should('contain.text', 'RTX 3080')

        cy.url().should('contain', '/products');
        cy.title().should('eq', 'Products');
    
    });
    

    it('Should result should contain nothing', () => {

        cy.get('input[name="search-bar"]')
        .should('have.value', '');

        cy.get('input[name="search"]')
        .type('kjokodskomdkkdkoldsokds')
        .click();

        cy.get('ul').should('have.length', 0);
    

        cy.url().should('contain', '/products');
        cy.title().should('eq', 'Products');
    
    });

    it('Should show - nothing found', () => {

        cy.get('input[name="search-bar"]')
        .should('have.value', '');

        cy.get('input[name="search"]')
        .type('randowome elementy')
        .click();

        cy.get('ul').should('have.length', 0);

    
        cy.get(".info").should('have.text',"Nie znaleziono takich produktów")
        cy.url().should('contain', '/products');
        cy.title().should('eq', 'Products');
    
    });

    it('Should print 3 products', () => {

        cy.get('input[name="search-bar"]')
        .should('have.value', 'RTX')
        .and('have.value', 'RTX');

        cy.get('input[name="search"]')
        .click();

        cy.get('ul').should('have.length', 3);

        cy.get('.page').then( items => {
            expect(items[0]).to.contains.text('RTX 3080')
            expect(items[1]).to.contains.text('RTX 3070')
            expect(items[2]).to.contains.text('RTX 3060')
        })

        cy.url().should('contain', '/products');
        cy.title().should('eq', 'Products');

    });

    it('Should print list of 10 products - search working with min 3 char', () => {

        cy.get('input[name="search-bar"]')
        .should('have.value', 'RT')
        .and('have.value', 'RT');

        cy.get('input[name="search"]')
        .click();

        cy.get('ul').should('have.length', 10);

        cy.url().should('contain', '/products');
        cy.title().should('eq', 'Products');
    });

    it('Should fint 1 product', () => {

        cy.get('input[name="search-bar"]')
        .should('have.value', 'RTX 3080')
        .and('have.value', 'RTX 3080');

        cy.get('input[name="search"]')
        .click();

        cy.get('ul').should('have.length', 1);
        cy.get('.page').then( items => {
            expect(items[0]).to.contains.text('RTX 3080')
        })

        cy.url().should('contain', '/products');
        cy.title().should('eq', 'Products');
    });


});