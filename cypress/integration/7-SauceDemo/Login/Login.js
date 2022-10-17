///<reference types="cypress"/>

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I visit the SauceDemo site',()=> {
    cy.visit('https://www.saucedemo.com/')
})

When('Enter Valid {string} and {string}', function (username, password) {
    cy.get('#user-name').type(username)
    cy.get('#password').type(password)
})

And('click on Login button', function () {
    cy.get('#login-button').click()
})

Then('I should navigate to the Product page', () => {
    cy.get('.title').should('be.visible')
})

And('I see {string} in the title', (title) => {
    cy.title().should('include', title)

})
