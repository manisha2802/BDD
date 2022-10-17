Feature: Login to OrangeHRM page

Scenario: Login with Valid credentials
    Given visit to OrangeHRM site
    When I enter valid user Name
    And I enter Valid Password
    And I click on Login button
    Then Validate OrangeHRM dashboard

Scenario: Login with invalid credentials
    Given visit to OrangeHRM site
    When I enter invalid user Name
    And I enter inValid Password
    And I click on Login button
    Then Validate error message
    