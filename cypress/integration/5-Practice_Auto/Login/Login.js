///<reference types="cypress"/>
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I visit the PracticeAutomation site', () => {
    cy.visit('https://practice.automationtesting.in/my-account/')
})
When('I enter valid username and Password', (data) => {

    data.hashes().forEach(ele => {
        cy.get('#username').type(ele.username)
        cy.get('#password').type(ele.Password)
    });
})
Given('I visit the PracticeAutomation site', function () {
    cy.visit('https://practice.automationtesting.in/my-account/')
})
When('enter valid {string} and {string}', (user, Pass) => {
    cy.get('#username').type(user)
    cy.get('#password').type(Pass)
})
And('I click on Login button', () => {
    cy.get('[name="login"]').click()
})
Then('Validate the Dashboard', () => {
    cy.get('.is-active > a').should('be.visible')

})
Then('Validate the {string} from Dashboard', (username) => {
    cy.get('.woocommerce-MyAccount-content >p>strong').then((el) => {

        cy.get('.is-active > a').should('be.visible')
        let text = el.text()
        let user = username.split('@')
        cy.log(user)
        expect(text).to.eq(user[0])

    })
})