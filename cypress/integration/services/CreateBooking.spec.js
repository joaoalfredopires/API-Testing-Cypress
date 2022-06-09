describe('Create booking', () => {

    it('Criar uma nova reserva - @acceptance', () => {
        cy.createBooking().should((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).not.to.be.null
        })
    })
})