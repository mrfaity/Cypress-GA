describe('Criando uma vida no App Gestão de acesso.', () => {
    it('passes', () => {
        //Login no App
        cy.visit('https://asq-gestao-acesso-app-dev.rhitmodev.com.br/cypressteste/auth/login')
        cy.get('[data-testid="email"]').type('andre.junior@rhitmo.com.br')
        cy.get('[data-testid="password"]').type('@ndre16Junior')
        cy.get('.mat-mdc-button-touch-target').click({ force: true})

        //clicando em vidas
        cy.get('[ng-reflect-router-link="lives"]').click()
        //clicando em novo
        cy.get('.btn-new > .mat-mdc-button-touch-target').click({ force: true })
        cy.visit('https://asq-gestao-acesso-app-dev.rhitmodev.com.br/cypressteste/lives/new/c8c9ab2d-347c-4a0e-829e-289268210b8b')

        //Preenchendo os dados
        cy.get('[data-testid="cpf"]').type('08795385037')
        cy.get('[data-testid="nomeCompleto"]').type('Andre Junior Cypress')
        cy.get('[data-testid="dataNascimento"]').type('18101997', {force: true})
        cy.get('#mat-select-value-1 > .mat-mdc-select-placeholder').click()
        cy.contains('Masculino').click()

        //Contato
        cy.get('[data-testid="email"]').type('teste@teste.com')
        cy.get('[data-testid="celular"]').type('31999484648')

        //Endereço residencial
        cy.get('[data-testid="cep"]').type('32668052')
        cy.wait(5000)

        //Salvar
        cy.get('.btn-save > .mat-mdc-button-touch-target').click({force: true})

    })
})