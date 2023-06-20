@welcome
Feature: Welcome page

  Background:
    Given I go to demo web


  @test6
  Scenario: As a user, I can see welcome page has the same content everytime navigate to
    Then welcome page content should be the same

  @test7
  Scenario: As a user, I can navigate to product page from welcome page
    When I click on product page link
    Then I will be navigated to product page
