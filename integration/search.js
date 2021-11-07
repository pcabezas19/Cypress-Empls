/// <reference types="cypress" />

describe('search test cases', function () {
    it('Search with results', function () {
        cy.visit('http://automationpractice.com/');
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
        cy.get('.search_query.form-control.ac_input').clear().type('hat');
        cy.get('#searchbox > .btn').click();

    })

})