import bookingSchema from "../../contracts/bookingSchema.contract";

describe('Get specific booking', () => {
    it('Listar uma reserva específica - @acceptance', () => {
        
        cy.allBookings().then((respostaAllBookings) => {
            cy.specificBooking(respostaAllBookings.body[0].bookingid).should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).not.to.be.null
            })
        })       
    })

    it('Garantir o contrato do retorno de uma reserva específica - @contracts', () => {
        
        cy.allBookings().then((respostaAllBookings) => {
            cy.specificBooking(respostaAllBookings.body[0].bookingid).should((response) => {
                return bookingSchema.validateAsync(response.body)
            })
        })     
    })
});