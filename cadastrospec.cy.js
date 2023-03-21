describe('Cadastrar de Usuário', () => {
  it('Teste de Cadastro', () => {
    cy.visit('https://app.cocobambu.com/entrar')
    cy.get('[text-left=""] > .link').click();
    cy.get('#name > .native-input').click().type('Evandro Lima');
    cy.get(':nth-child(3) > #username > .native-input').click().type('evandrol@hotmail.com');
    cy.get(':nth-child(5) > .ng-untouched > .native-input').click().type('A040n#');
    cy.get(':nth-child(7) > .ng-untouched > .native-input').click().type('A040n#');
    cy.get('.selector-field > .ng-untouched').click();
    cy.get('#formRegisterUser').click();
    cy.get('.action-sheet-container > :nth-child(1) > :nth-child(8)').click();
    cy.get('.checkbox.ion-valid > .ng-untouched').click();
    cy.get('.checkbox.ion-untouched > .ng-untouched').click();
    cy.get('.is-primary').click();
    cy.get('.button-container > button').click();
    
    })
})