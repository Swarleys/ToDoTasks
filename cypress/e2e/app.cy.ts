//@ts-ignore
describe('Testing Todo Tasks', () => {
  it('Using the app', () => {
    // Testing that the route is proteced and redirects to the login page
    cy.visit('/todos')
    cy.url().should('not.include', '/todos')
    cy.url().should('include', '/')
    cy.get('[data-testid="username"]').type('Esteban')
    cy.get('[data-testid="password"]').type('123456')
    cy.get('[data-testid="login"]').click()
    // testing that the middleware works and redirects to the todos page since the user is logged in
    cy.visit('/')
    cy.url().should('include', '/todos')
    // Adding a new task
    cy.get('[data-testid="input-task"]').type('Testing')
    cy.get('[data-testid="button-task"]').click()
    cy.get('[data-testid="new-task"]').should('be.visible').should('contain', 'Testing')
    cy.visit('/todos')
    // It should still be visible, since it is saved in the local storage
    cy.get('[data-testid="new-task"]').should('be.visible').should('contain', 'Testing')
    // Deleting the task
    cy.get('[data-testid="delete-todo"]').click()
    cy.get('[data-testid="new-task"]').should('not.exist')
    // Adding a new task
    cy.get('[data-testid="input-task"]').type('Second Test')
    cy.get('[data-testid="button-task"]').click()
    // Completing the task
    cy.get('[data-testid="complete-task"]').click()
    cy.get('[data-testid="text-task"]').should('have.css', 'text-decoration', 'line-through solid rgb(0, 128, 0)')
    // Uncompleting the task
    cy.get('[data-testid="complete-task"]').click()
    cy.get('[data-testid="text-task"]').should('not.have.css', 'text-decoration', 'line-through solid rgb(0, 128, 0)')
    // Editing the task
    cy.get('[data-testid="edit-task"]').click()
    cy.get('[data-testid="edit-task-input"]').clear().type('Pokemon')
    cy.get('[data-testid="edit-task-button"]').click()
    cy.get('[data-testid="edit-task-input"]').should('not.exist')
    cy.get('[data-testid="text-task"]').should('contain', 'Pokemon')
    // Logging out
    cy.get('[data-testid="logout"]').click()
    cy.url().should('not.include', '/todos')
    cy.url().should('include', '/')
  })
})