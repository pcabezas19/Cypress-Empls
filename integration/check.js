/// <reference types="cypress" />
describe('Pruebas de checkbox', function () {

    beforeEach(function () {
        cy.visit('http://automationpractice.com/index.php?id_category=3&controller=category');
    })

    it('Pruebita checbox', () => {
        cy.get('#layered_category_4').check()
        cy.get('#layered_id_attribute_group_2').check()
        cy.get('#layered_id_attribute_group_2').uncheck()
    })
})