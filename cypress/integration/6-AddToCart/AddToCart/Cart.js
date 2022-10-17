///<reference types="cypress"/>
import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps"

Given('visit the Site',()=>{
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When('I search {string} and add {string} to the cart',(str,str1)=>{
    cy.get('.search-keyword').type(str)
    cy.get('.search-button').click()
    cy.get('.product-name').each((el,index)=>{

        if(el.text().includes(str1))
        {
            cy.get('.product-action >button').eq(index).click()
        }  
    })
})
And('I click on cart and Place the order',()=>{
    cy.get('[alt="Cart"]').click()
    cy.contains('PROCEED TO CHECKOUT').click()
})

Then('select the country and click on Proceed',()=>{
    cy.contains('Place Order').click()
    cy.get('select').select('India')
    cy.get('.chkAgree').check()
    cy.get('button').click()
})

And('Verify {string} Msg',function(msg){
    cy.contains('Thank you').should('contain',msg)

})