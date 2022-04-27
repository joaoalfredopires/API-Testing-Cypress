
describe('Delete Booking', () => {

    it('Excluir uma reserva com sucesso - @acceptance', () => {
        cy.token().then((respostaToken) => {
            cy.log(respostaToken.body.token)
            cy.allBookings().then((respostaAllBookings) => {
                cy.deleteBooking(respostaAllBookings.body[0].bookingid, respostaToken.body.token).then((response) => {
                    expect(response.status).to.eq(201)
                })
            })
        })
    });
});