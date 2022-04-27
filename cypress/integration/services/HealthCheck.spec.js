
describe('Health Check', () => {

    it('Verificar se API está online - @healthcheck', () => {
        cy.healthCheck().should((response) => {
            expect(response.status).to.eq(201)
        })
    })
});