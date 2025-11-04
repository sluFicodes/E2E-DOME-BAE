// Import commands
require('./commands')

// Custom command to select elements by data-cy attribute
Cypress.Commands.add('getBySel', (selector, options) => {
  return cy.get(`[data-cy="${selector}"]`, options)
})
