describe('Resetar Senha', () => {
  it('Resetar Senha', () => {
    cy.visit('https://app.cocobambu.com/entrar')
    cy.get('.text-right > .link').click();
    cy.get('.text-right > .first-line').click();
    cy.get('#ion-overlay-2 > .alert-wrapper > .alert-input-group > .alert-input-wrapper').click().type('evandroli@hotmail.com');
    cy.get('#ion-overlay-2 > .alert-wrapper > .alert-button-group > :nth-child(2)').click();
    

  })
})