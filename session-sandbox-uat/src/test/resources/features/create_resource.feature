Feature: Create a new Learning Resource
 
  Scenario Outline: Successfully Creates a Learning Resource
    Given I am viewing the create resource page
    When I enter new resource title as <resourceTitle>
    And I submit the Form
    Then The returned status code is <statusCode> and the message is <message>
    And The database contains a new Learning Resource with the title <resourceTitle>

    Examples:
      | resourceTitle | statusCode | message            |
      | "Java"        |     201    | "Resource Created" |
      | "Ruby"        |     201    | "Resource Created" |
