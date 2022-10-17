///<reference types="cypress"/>
import { Given,When,Then,And } from "cypress-cucumber-preprocessor/steps";

Given('visit PracticeDemo site',()=>{
cy.visit('https://practicetestautomation.com/practice-test-login/')
})
When('I enter valid UserName',()=>{
cy.get('#username').type('student')
})
And('I enter valid Password',()=>{
cy.get('#password').type('Password123')
})
Then('I click on Submit button',()=>{
cy.get('#submit').click()
})
And('Validate the {string} message',(str)=>{
    cy.get('.post-title').should('have.text',str)
})
When('I enter invalid UserName',()=>{
    cy.get('#username').type('student1')
})
And(`Validate the {string} error message`,(str)=>{
    cy.get('.show').should('have.text',str)
})