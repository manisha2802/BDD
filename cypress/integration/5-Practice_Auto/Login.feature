Feature: Validate the Login functionality of PracticeAutomation site

Scenario: Login with valid credentials
Given I visit the PracticeAutomation site
When I enter valid username and Password
| username            | Password |
|manisha123@gmail.com  |Manisha@123|
And I click on Login button
Then Validate the Dashboard

Scenario Outline: Login with Valid credentials with multiple User
Given I visit the PracticeAutomation site
When enter valid "<username>" and "<Password>"
And I click on Login button
Then Validate the "<username>" from Dashboard
Examples:
    |username              |  Password   |
    | manisha123@gmail.com | Manisha@123 | 
    | gauri@test.com  | 12Minskole@ |


