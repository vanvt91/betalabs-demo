@product
Feature: Product Page

  Background:
    Given I go to demo web

  @test1
  Scenario Outline: <filterData> - As a user, I can see correct data is return after filtered
    When I navigate to product page
    And I filter product by information following
      | type        | Filter       |
      | headerTitle | Categories   |
      | operator    | contains     |
      | filterData  | <filterData> |
    And I store number of products
    And I retrivie data from table
    Then all products listed in the result have correct category in the categories field

    Examples:
      | filterData |
      | Category 1 |
      | Category 2 |
      | Category 3 |
      | Category 4 |

  @test2
  Scenario: As a user, I can see every product belongs to at least 1 of 4 categories
    When I navigate to product page
    And I store number of products
    And I retrivie data from table
    Then every product belongs to at least 1 of 4 categories

  @failTest
  @test3
  Scenario: As a user, I can see every product has correct structure
    When I navigate to product page
    And every product has the expected properties following
      | header     |
      | id         |
      | categories |
      | name       |
      | image      |
      | in stock   |
      | price      |

  @failTest
  @test4
  Scenario Outline: <filterData> - None of the products have multiple occurrences of the same category
    When I navigate to product page
    And I filter product by information following
      | type        | Filter       |
      | headerTitle | Categories   |
      | operator    | contains     |
      | filterData  | <filterData> |
    And I retrivie data from table
    And none of the products have multiple occurrences of the same category

    Examples:
      | filterData |
      | Category 1 |
      | Category 2 |
      | Category 3 |
      | Category 4 |

  @test5
  Scenario Outline: <headerTitle> - As a user, I can see the filter return the correct number of product
    When I navigate to product page
    And I filter product by information following
      | type        | Filter        |
      | headerTitle | <headerTitle> |
      | operator    | <operator>    |
      | filterData  | <filterData>  |
    And I store number of products
    And I retrivie data from table
    Then number of product returned the correct value

    Examples:
      | headerTitle | operator    | filterData |
      | ID          | contains    | 6          |
      | Categories  | equals      | Category 4 |
      | Name        | starts with | Pro        |
      | In Stock    | =           | 1          |
      | Price       | >           | 1000       |

  @test10
  Scenario: As a user, I can sort by price
    When I navigate to product page
    And I sort product by information following
      | type        | Sort by DESC |
      | headerTitle | Price        |
    And I retrivie data from table
    Then product table show as descending order by price


