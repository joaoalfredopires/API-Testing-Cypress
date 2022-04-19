/// <reference types="Cypress" />

import bookingIdsSchema from '../../contracts/bookingIds.contract'

describe('Get booking Ids', () => {
    it('Listar IDs de reserva', () => {
        cy.allBookings().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        });
    });

    it('Garantir o contrato do retorno da lista de reservas', () => {
        cy.allBookings().should((response) => {
            return bookingIdsSchema.validateAsync(response.body)
        })
    });
});