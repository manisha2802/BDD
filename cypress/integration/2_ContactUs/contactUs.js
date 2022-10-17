///<reference types="cypress"/>
import contactUsPages from './Pages'
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"

Given('I successfully visit on contact us page', () => {
    contactUsPages.visitUrl()
})
When('I enter firstName,lastname,email and comment', () => {
    contactUsPages.EnterData()
})

And('I click on submit button', function () {
    contactUsPages.ClickSubmit()
})

Then('I successfully navigate on Thank You page', () => {
    contactUsPages.assert()
})

And('I click on reset button', function () {
    contactUsPages.ClickonReset()
})

Then('I successfully reset the page',()=>{
    contactUsPages.assert2()
})