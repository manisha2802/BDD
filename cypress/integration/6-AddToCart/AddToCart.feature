Feature: Validate the functonality of AddToCart functionality

Scenario: add vegitable to the cart and place order
Given visit the Site
When I search "po" and add 'Potato' to the cart
And I click on cart and Place the order
Then select the country and click on Proceed
And Verify "Thank you" Msg
