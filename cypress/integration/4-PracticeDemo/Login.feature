Feature: Validate Login Functionality of PracticeDemo site

Scenario:Login with valid credentials
Given visit PracticeDemo site
When I enter valid UserName
And I enter valid Password
Then I click on Submit button
And Validate the 'Logged In Successfully' message

Scenario:Login with invalid credentials
Given visit PracticeDemo site
When I enter invalid UserName
And I enter valid Password
Then I click on Submit button
And Validate the 'Your username is invalid!' error message