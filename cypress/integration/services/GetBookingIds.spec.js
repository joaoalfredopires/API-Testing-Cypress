/// <reference types="Cypress" />


describe('Get booking Ids', () => {
    it('Listar IDs de reserva', () => {
        cy.allBookings().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        });
    });
});