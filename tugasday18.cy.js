describe('Tugas Day Sanbercode SQA Batch 18', () => {
  
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.url().should('include', '/web/index.php/dashboard/index')
  })

  it('unPasses', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear()
    cy.get('.oxd-button').click()
    cy.url().should('include', '/web/index.php/auth/login')
  })

  it('viewsUser', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.get(':nth-child(2) > .oxd-input').type('bahrigun')
    cy.get('.oxd-form-actions > .oxd-button--secondary').contains('Search')
    cy.url().should('include','/web/index.php/admin/viewSystemUsers')
  })

})