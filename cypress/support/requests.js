//GET

Cypress.Commands.add('allBookings', () => {
    cy.request({
        method: 'GET',
        url: '/booking',
        failOnStatusCode: false
    })
});


//POST

Cypress.Commands.add('token', () => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: '/auth',
        headers: {
            accept: 'application/json'
        },
        body:{
            "username": "admin",
            "password": "password123"
        }
    })
})


//PUT

Cypress.Commands.add('updateBookingWithToken', (id, token) => {
    cy.request({
        method: 'PUT',
        failOnStatusCode: false,
        url: `/booking/${id}`,
        headers: {
            accept: "application/json",
            Cookie: `token=${token}`
        },
        body: {
            "firstname": "João",
            "lastname": "Pires",
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2022-04-25",
                "checkout": "2022-04-29"
            }
        },
        "adittionalneeds": "Breakfast"
    })
});