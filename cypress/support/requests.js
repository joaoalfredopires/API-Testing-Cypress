import {faker} from '@faker-js/faker'

function generateRandomDate() {

    let randomYear = Math.floor(Math.random() * (2022 - 2020 + 1) ) + 2020;
    let randomMonth = Math.floor(Math.random() * (12 - 1 + 1) ) + 1;
    let randomDay = Math.floor(Math.random() * (30 - 1 + 1) ) + 1;

    return `${randomYear}-${randomMonth}-${randomDay}`
}

//GET

Cypress.Commands.add('allBookings', () => {
    cy.request({
        method: 'GET',
        url: '/booking',
        failOnStatusCode: false
    })
});

Cypress.Commands.add('healthCheck', () => {
    cy.request({
        method: "GET",
        url: '/ping',
        failOnStatusCode: false
    })
});

Cypress.Commands.add('specificBooking', (bookingID) => {
    cy.request({
        method: "GET",
        url: `/booking/${(bookingID)}`,
        failOnStatusCode: false
    })
});

Cypress.Commands.add('bookingWithNameFilter', (filter, name) => {  
    cy.request({
        method: "GET",
        url: `/booking?${filter}=${name}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('bookingWithOneDateFilter', (filter, date) => {
    cy.request({
        method: "GET",
        url: `/booking?${filter}=${date}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('bookingWithCheckoutCheckoutFilter', (filter1, date1, filter2, date2) => {
    cy.request({
        method: "GET",
        url: `/booking?${filter1}=${date1}&${filter2}=${date2}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('bookingWithAllFilters', (firstname, lastname, date1, date2) => {
    cy.request({
        method: "GET",
        url: `/booking?firstname=${firstname}&lastname=${lastname}&checkin=${date1}&checkout=${date2}`,
        failOnStatusCode: false
    })
})

Cypress.Commands.add('bookingWithWrongFilterFormat', (firstname, lastname, date1, date2) => {
    cy.request({
        method: "GET",
        url: `/booking$firstname=${firstname}&lastname=${lastname}&checkin=${date1}&checkout=${date2}`,
        failOnStatusCode: false
    })
})

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

Cypress.Commands.add('createBooking', () => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url: '/booking',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        },
        body: {
            "firstname": faker.name.firstName(),
            "lastname": faker.name.lastName(),
            "totalprice": 390,
            "depositpaid": true,
            "bookingdates": {
                "checkin": generateRandomDate(),
                "checkout": generateRandomDate()
            }
        },
        "adittionalneeds": "Breakfast"
    })
});

Cypress.Commands.add('createBookingWithInvalidPayload', () => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url:'/booking',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        },
        body: {
            "firstname": 6630,
            "lastname": 56,
            "totalprice": 256,
            "depositpaid": true,
            "bookingdates": {
                "checkin": generateRandomDate(),
                "checkout": generateRandomDate()
            }
        },
        "aditionalneeds": "Breakfast"
    })
});

Cypress.Commands.add('createBookingWithExtraParams', () => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url:'/booking',
        headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
        },
        body: {
            "firstname": faker.name.firstName(),
            "lastname": faker.name.lastName(),
            "totalprice": 256,
            "depositpaid": true,
            "bookingdates": {
                "checkin": generateRandomDate(),
                "checkout": generateRandomDate()
            }
        },
        "aditionalneeds": "Breakfast",
        "numberofchildren": 3,
        "clientjob":"Software Developer"
    })
});

Cypress.Commands.add('createBookingWithInvalidAccept', () => {
    cy.request({
        method: 'POST',
        failOnStatusCode: false,
        url:'/booking',
        headers: {
            'Content-Type': 'application/json',
            accept: 'accept/invalido'
        },
        body: {
            "firstname": faker.name.firstName(),
            "lastname": faker.name.lastName(),
            "totalprice": 256,
            "depositpaid": true,
            "bookingdates": {
                "checkin": generateRandomDate(),
                "checkout": generateRandomDate()
            }
        },
        "aditionalneeds": "Breakfast"
    })
});

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
            "firstname": faker.name.firstName(),
            "lastname": faker.name.lastName(),
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates": {
                "checkin": generateRandomDate(),
                "checkout": generateRandomDate()
            }
        },
        "adittionalneeds": "Breakfast"
    })
});

Cypress.Commands.add('updateBookingWithBasicAuth', (id) => {
    cy.request({
        method: 'PUT',
        failOnStatusCode: false,
        url: `/booking/${id}`,
        headers: {
            accept: "application/json",
            Authorization: 'Basic YWRtaW46cGFzc3dvcmQxMjM='
        },
        body: {
            "firstname": faker.name.firstName(),
            "lastname": faker.name.lastName(),
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates": {
                "checkin": generateRandomDate(),
                "checkout": generateRandomDate()
            }
        },
        "adittionalneeds": "Breakfast"
    })
});


//DELETE
Cypress.Commands.add('deleteBooking', (id, token) => {
    cy.request({
        method: 'DELETE',
        failOnStatusCode: false,
        url: `booking/${id}`,
        headers: {
            'Content-Type': 'application.json',
            Cookie: `token=${token}`
        }
    })
});