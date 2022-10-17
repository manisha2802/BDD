Feature:Google/Facebook main page
 
    I want to open a search engine

    Scenario: Opening a search engine page
        Given I open google page
        Then I see "Google" in the title

    Scenario: Opening a Facebook homepage
        Given I open Facebook  home page
        Then I see "Facebook" in the title



