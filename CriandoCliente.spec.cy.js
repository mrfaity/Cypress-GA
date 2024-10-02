describe('Criando cliente no Gestão de acessos', () => {
    it('passes', () => {
    //Realizando o login
      cy.visit('https://asq-gestao-acesso-backoffice-dev.rhitmodev.com.br/auth/login')
      cy.get('[data-testid="email"]').type('admin@rhitmo.com.br')
      cy.get('[data-testid="password"]').type('Rhitmo@11')
      cy.get('.mat-mdc-button-touch-target').click({ force: true })

    //Criando cliente
    cy.get('.nav__items > .ng-star-inserted').click()
    cy.get('.content > .btn-new > .mat-mdc-button-touch-target').click({ force: true })

    //Preenchendo os dados do cliente
    cy.get('[data-testid="nomeFantasia"]').type('Cypress NovoTeste')
    cy.get('[data-testid="razaoSocial"]').type('Cypress NovoTeste')
    cy.get('[data-testid="cnpj"]').type('72338009000118')
    cy.get('[data-testid="segmento"]').type('Teste')
    cy.get('[data-testid="linkPlataforma"]').type('cypressnovoteste', { force: true })
    
    

    
    //Dados dos responsáveis
    cy.get('[data-testid="nomeCompleto"]').type('Andre Junior')
    cy.get('[data-testid="email"]').type('andre.junior@rhitmo.com.br')
    cy.get('[data-testid="telefone"]').type('31999484648')
    cy.get('#mat-select-value-7 > .mat-mdc-select-placeholder').click()
    cy.contains('Administrativo').click()
    cy.get('#mat-select-value-9 > .mat-mdc-select-placeholder').click()
    cy.contains('Presidente').click()

    //Dados do contrato
    cy.get('[data-testid="dataContratacao"]').type('17/09/2024', { force: true})
    cy.get('[data-testid="quantidadeVidas"]').type('120', { force: true})
    cy.get('[data-testid="vidasAprovadas"]').type('120', { force: true})
    cy.get('[data-testid="valorPorVidaTitular"]').type('12,45', { force: true})
    cy.get('[data-testid="valorPorVidaDependente"]').type('12,45', { force: true})
    cy.get('[data-testid="faturaMinimaContrato"]').type('12,45', { force: true})
    cy.get('.mat-mdc-select-placeholder').click()
    cy.contains('Telemedicina').click()
    

    // adiconando imagem
    const fixtureFile = 'logo.jpeg';

    //comando para colocar a imagem
    cy.get('input[type="file"]').attachFile(fixtureFile, { force: true })

    //Salvando cliente:
    cy.wait(5000)
    cy.get('.ml-10 > .mat-mdc-button-touch-target').click({force: true})

    
})
})