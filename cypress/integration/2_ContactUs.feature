Feature: Validate functionality of contctUs page

    I want to validate the functionality of contctUs page

Scenario: As a user I should able to submit the form
Given I successfully visit on contact us page
When I enter firstName,lastname,email and comment
And I click on submit button
Then I successfully navigate on Thank You page

Scenario: As a user I should able to reset the form
Given I successfully visit on contact us page
When I enter firstName,lastname,email and comment
And I click on reset button
Then I successfully reset the page