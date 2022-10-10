import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

const url = 'https://google.com'
Given('I open google page', () => {
    cy.visit(url)
})

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})
