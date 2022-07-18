
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

    it('Tentar excluir um reserva que não existe - @e2e', () => {
        cy.token().then((respostaToken) => {
            cy.log(respostaToken.body.token)
            cy.deleteBooking(999, respostaToken.body.token).then((response) => {
                    expect(response.status).to.eq(201)
            })
        })
    })

    it('Tentar excluir uma reserva sem autorização - @e2e', () => {
        
        cy.allBookings().then((respostaAllBookings) => {
        cy.deleteBooking(respostaAllBookings.body[0].bookingid, 123456).then((response) => {
            expect(response.status).to.eq(201)
            })
        })
        
    });
});