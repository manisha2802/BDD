class contactUsPages
{
    static visitUrl(){
        cy.visit('https://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.url().should('include', 'Contact-Us')
    }
    static EnterData(){
        cy.get(`[name="first_name"]`).type('Manisha')
        cy.get('[name="last_name"]').type('Kamble')
        cy.get('[name="email"]').type('abc@gmail.com')
        cy.get('[name="message"]').type('Hello')
    }
    static ClickSubmit()
    {
        cy.get('[type="submit"]').click()
    }
    static assert()
    {
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    }
    static ClickonReset()
    {
        cy.get('[type="reset"]').click()
    }
    static assert2()
    {
        cy.get('[name="last_name"]').should('have.text',"")
    }
}
export default contactUsPages;