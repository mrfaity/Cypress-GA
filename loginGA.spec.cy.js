describe('Login Gestão de acessos', () => {
  it('passes', () => {
    cy.visit('https://asq-gestao-acesso-backoffice-dev.rhitmodev.com.br/auth/login')
    cy.get('[data-testid="email"]').type('admin@rhitmo.com.br')
    cy.get('[data-testid="password"]').type('Rhitmo@11')
    cy.get('.mat-mdc-button-touch-target').click({ force: true })
  })
})