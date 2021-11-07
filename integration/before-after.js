/// <reference types="cypress" />

describe('search test cases', () => {

    this.beforeEach(function () {//this.beforeEach para que fuera despues de cada it (cada prueba)
        cy.log('Ejecutando precondiciones');
        cy.visit('http://automationpractice.com/');
    })

    after(function () {
        cy.log('Aca van las postcodiciones');
    })
    it('Pruebita 1', function () {

        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
        cy.get('.search_query.form-control.ac_input').clear().type('hat');
        cy.get('#searchbox > .btn').click();

    })
    it('Pruebita 2', function () {
        cy.get('#search_query_top').type('dress');
        cy.get('#searchbox > .btn').click();
        cy.get('.lighter').contains('"dress"');
        cy.get('.search_query.form-control.ac_input').clear().type('hat');
        cy.get('#searchbox > .btn').click();

    })

})