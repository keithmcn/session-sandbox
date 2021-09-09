Feature: View All Learning Resources

  Scenario: View Existing Learning Resources
    Given The following learnng resources already exist:
      |title|url|category|type|tsgs|comment|
      |||||||
      |||||||
    When I open the home page
    Then Resources with the following details will be visible:
      |title|url|type|
      ||||
      ||||
