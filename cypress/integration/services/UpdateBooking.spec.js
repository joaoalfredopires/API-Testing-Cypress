

describe('Put Booking', () => {

    it('Alterar uma reserva usando token - @acceptance', () => {
        cy.token().then((respostaToken) => {
            cy.log(respostaToken.body.token)
            cy.allBookings().then((respostaAllBookings) => {
                cy.log(respostaAllBookings.body)
                cy.updateBookingWithToken(respostaAllBookings.body[0].bookingid, respostaToken.body.token).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.firstname).not.to.be.null
                })
            })
        })
    });

    it('Alterar uma reserva usando Basic Auth - @acceptance', () => {
        
        cy.allBookings().then((respostaAllBookings) => {
            cy.log(respostaAllBookings.body)
            cy.updateBookingWithBasicAuth(respostaAllBookings.body[0].bookingid).then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.firstname).not.to.be.null
            })
        })
        
    });
    
});