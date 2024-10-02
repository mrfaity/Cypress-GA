describe('Acessando ambiente App Gestão de acessos', () => {
    it('passes', () => {
        //Login no backoffice
        cy.visit('https://asq-gestao-acesso-backoffice-dev.rhitmodev.com.br/auth/login')
        cy.get('[data-testid="email"]').type('admin@rhitmo.com.br')
        cy.get('[data-testid="password"]').type('Rhitmo@11')
        cy.get('.mat-mdc-button-touch-target').click({ force: true })
        
        //acessando link do cliente
        cy.get('.nav__items > .ng-star-inserted').click()
        cy.get(':nth-child(2) > .card-container > .card-content > :nth-child(1) > .info').click()
        cy.get('.mat-mdc-card > :nth-child(1) > :nth-child(3) > :nth-child(4) > .subtitle').click()

        
    })
  })