describe('Create booking', () => {

    it('Criar uma nova reserva - @acceptance', () => {
        cy.createBooking().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        })
    });

    it('Validar retorno 500 quando o payload da reserva estiver inválido - @e2e', () => {
        cy.createBookingWithInvalidPayload().should((response) => {
            expect(response.status).to.eq(500)
        })
    });

    it('Validar a criacao de mais de um livro em sequencia - @e2e', () => {
        cy.createBooking().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        })

        cy.createBooking().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        })

        cy.createBooking().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        })
    });

    it('Criar uma reserva enviando mais parametros no payload da reserva - @e2e', () => {
        cy.createBookingWithExtraParams().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        })
    })
})