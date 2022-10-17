///<reference types="cypress"/>
import { And, Given, Then, When } from "cypress-cucumber-preprocessor/steps"
import obj from "../../../fixtures/OrangreHRM.json"

Given('visit to OrangeHRM site', () => {
    cy.visit('/login')
})
When('I enter valid user Name', () => {
    cy.get('[name="username"]').type(obj[0].UserName)
})
And('I enter Valid Password', () => {
    cy.get('[name="password"]').type(obj[0].password)
})
And('I click on Login button', function () {
    cy.get('[type="submit"]').click()
})
Then('Validate OrangeHRM dashboard', () => {
    cy.get('h6').should('be.visible')
})

When('I enter invalid user Name', () => {
 cy.get('[name="username"]').type(obj[1].UserName)

})
And('I enter inValid Password', () => {
    cy.get('[name="password"]').type(obj[1].password)
})
Then('Validate error message', () => {
cy.get('.oxd-alert-content-text').should('contain','Invalid')
})