import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"

const url = 'https://google.com'
Given('I open google page', () => {
    cy.visit(url)
})

Given('I open Facebook  home page', () => {
    cy.visit('https://www.facebook.com')
})

Then(`I see {string} in the title`, (title) => {
    cy.title().should('include', title)
})
