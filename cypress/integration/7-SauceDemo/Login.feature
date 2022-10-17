Feature: Validate the login functionality of SauceDemo site

Scenario Outline: Login with valid credentials for multiple user
Given I visit the SauceDemo site
When Enter Valid "<user>" and "<pass>"
And click on Login button
Then I should navigate to the Product page
And I see "inventory" in the titlee
Examples:
    | user            |     pass    |
    | standard_user   |    secret_sauce  |
    | locked_out_user |    secret_sauce  |
    | problem_user    |    secret_sauce  |
    |performance_glitch_user|   secret_sauce   |
    