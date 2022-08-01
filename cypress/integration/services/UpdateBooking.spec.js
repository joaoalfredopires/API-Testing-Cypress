

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
    
    it('Tentar alterar uma reserva quando o token não for enviado - @e2e', () => {
        cy.allBookings().then((respostaAllBookings) => {
            cy.updateBookingWithToken(respostaAllBookings.body[0].bookingid, '').then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })

    it('Tentar alterar uma reserva quando o token enviado for inválido - @e2e', () => {
        cy.allBookings().then((respostaAllBookings) => {
            cy.updateBookingWithToken(respostaAllBookings.body[0].bookingid, 'abc123').then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })

    it('Tentar alterar uma reserva que não existe - @e2e', () => {
        cy.token().then((respostaToken) => {
            cy.updateBookingWithToken(999, respostaToken.body.token).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
        
    })
});