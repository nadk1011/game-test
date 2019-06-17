Feature: Product description journey

    Scenario: XBox product description journey
        Given I navigate to the Game Home page
        When I click on the xbox menu link
        And I click on the 'MotoGp-19' buy now link
        Then The title of the product description should be 'MotoGp-19'