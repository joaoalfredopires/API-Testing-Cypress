

describe('Put Booking', () => {

    it('Alterar uma reserva usando token', () => {
        cy.token().then((respostaToken) => {
            cy.log(respostaToken.body.token)
            cy.allBookings().then((respostaAllBookings) => {
                cy.log(respostaAllBookings.body)
                cy.updateBookingWithToken(respostaAllBookings.body[0].bookingid, respostaToken.body.token).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.firstname).to.eq("João")
                })
            })
        })
    });
});