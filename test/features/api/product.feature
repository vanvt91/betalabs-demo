Feature: Product

  Background:
    Given I have retrivied all products

  @test8
  Scenario: As a use, I can see product contain correct properties
    Then all products should be retrivied correctly
    And response structure has the expected properties following
      | properties |
      | id         |
      | categories |
      | name       |
      | image      |
      | inStock    |
      | price      |

  @test9
  Scenario: As a user, I can see that a product can belong to multiple categories
    Then product can belong to multiple categories