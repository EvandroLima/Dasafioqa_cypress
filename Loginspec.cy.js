describe('Login de Usuário', () => {
  it('Teste de Login ', () => {
    cy.visit('https://app.cocobambu.com/entrar')
    cy.get('#username > .native-input').click().type('evandroli@hotmail.com');
    cy.get('.ng-pristine > .native-input').click().type('A040n#');
    cy.get('.buttons-container > :nth-child(1)').click();
  
  })
})