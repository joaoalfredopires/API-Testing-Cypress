/// <reference types="Cypress" />

import bookingIdsSchema from '../../contracts/bookingIds.contract'

describe('Get booking Ids', () => {
    it('Listar IDs de reserva - @acceptance', () => {
        cy.allBookings().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        });
    });

    it('Garantir o contrato do retorno da lista de reservas - @contracts', () => {
        cy.allBookings().should((response) => {
            return bookingIdsSchema.validateAsync(response.body)
        })
    });

    it('Listar IDs de reservas utilizando o filtro firstname - @acceptance', () => {
        cy.bookingWithNameFilter('firstname', 'Mary').should((response) => {
            expect(response.status).to.eq(200)
        });
    });

    it('Listar IDs de reservas utilizando o filtro lastname - @acceptance', () => {
        cy.bookingWithNameFilter('lastname', 'Smith').should((response) => {
            expect(response.status).to.eq(200)
        });
    });

    it('Listar IDs de reservas utilizando o filtro checkin - @acceptance', () => {
        cy.bookingWithOneDateFilter('checkin', '2021-10-10').should((response) => {
            expect(response.status).to.eq(200)
        });
    });

    it('Listar IDs de reservas utilizando o filtro checkout - @acceptance', () => {
        cy.bookingWithOneDateFilter('checkout', '2021-10-10').should((response) => {
            expect(response.status).to.eq(200)
        });
    });

    it('Listar IDs de reservas utilizando o filtro checkout & checkout - @acceptance', () => {  // Teste falha, pois o desafio não especifica que deve-se esperar um status de erro
        cy.bookingWithCheckoutCheckoutFilter('checkout', '2021-10-10', 'checkout', '2021-12-10').should((response) => {
            expect(response.status).to.eq(200)
        });
    });

    it('Listar IDs de reservas utilizando o filtro name, checkin and checkout date - @acceptance', () => {  
        cy.bookingWithAllFilters('Mary', 'Jackson', '2016-07-11', '2019-05-17').should((response) => {
            expect(response.status).to.eq(200)
        });
    });

});