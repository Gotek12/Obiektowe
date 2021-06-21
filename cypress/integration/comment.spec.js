// comment.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe("Order history", () => {
    
    it('Should see order history', () => {

        cy.visit("/user/order_history")

        cy.get('ul').should('have.length', 5);

        cy.get('.history').then( items => {
            expect(items[0].name).to.contains.text('RTX 3080')
            expect(items[1].name).to.contains.text('SAMSUNG GALAXY S22 ULTRA')
            expect(items[2].name).to.contains.text('Ziemniaki 3kg')
        })

        cy.get('ul').should('have.length', 3);
        cy.title().should('eq', 'Order history');
    });

    it('Should see order history and raiting', () => {

        cy.visit("/user/order_history")

        cy.get('ul').should('have.length', 5);

        cy.get('.history').then( items => {
            expect(items[0].mark).to.contains.text('5')
            expect(items[1].mark).to.contains.text('3.5')
            expect(items[2].mark).to.contains.text('2')
        })

        cy.get('ul').should('have.length', 3);
        cy.title().should('eq', 'Order history');
    });

    it('Should see 1st order details', () => {

        cy.visit("/user/order_history")
        cy.get('.item[0]')
        .click();
        cy.url().should('contain', '/user/order_history/1');
        cy.title().should('eq', 'Order history - RTX 3080');

        cy.get('.price')
        should('not.have.value', '7000')
    });

    it('Should add comment to 1st product', () => {

        cy.visit("/user/order_history/1")

        cy.get('input[name="add-comment"]')
        .type('Wydajna i szybka karta')
        .should('be.selected')
        .and('have.value', 'Wydajna i szybka karta');

        cy.get('input[name="add"]')
        .click();

        cy.url().should('contain', '/user/order_history/1');
        cy.get('.info').should('have.css', 'color', 'blue');
        cy.get(".info").should('have.text',"Dodano komentarz.")
    });

    it('Should not add new comment to 2nd product', () => {

        cy.visit("/user/order_history/2")

        cy.get('input[name="add"]')
        .should('have.css', 'disabled');
    });

    it('Should edit comment', () => {

        cy.visit("/user/order_history/3")

        cy.get('input[name="add-comment"]')
        .type('Słabe ziemniaki')
        .should('be.selected')
        .and('have.value', 'Słabe ziemniaki');

        cy.get('input[name="add"]')
        .click();

        cy.url().should('contain', '/user/order_history/3');

        cy.get('input[name="edit"]')
        .click();

        cy.get('input[name="edit-comment"]')
        .type('Takie sobie')
        .should('be.selected')
        .and('have.value', 'Takie sobie');

        cy.url().should('contain', '/user/order_history/3');
        cy.get('.info').should('have.css', 'color', 'blue');
        cy.get(".info").should('have.text',"Komentarz został edytowany.")
    });

    it('Should not edit comment - passed 15 min', () => {

        cy.visit("/user/order_history/3")

        cy.get('input[name="add-comment"]')
        .type('Słabe ziemniaki')
        .should('be.selected')
        .and('have.value', 'Słabe ziemniaki');

        cy.get('input[name="add"]')
        .click();

        cy.url().should('contain', '/user/order_history/3');

        cy.wait(900100);

        cy.get('input[name="edit"]')
        .click();

        cy.get('input[name="edit-comment"]')
        .type('Takie sobie')
        .should('be.selected')
        .and('have.value', 'Takie sobie');

        cy.url().should('contain', '/user/order_history/3');
        cy.get('.error').should('have.css', 'color', 'red');
        cy.get(".error").should('have.text',"Czas na edycję komentarza minął.")
    });

});