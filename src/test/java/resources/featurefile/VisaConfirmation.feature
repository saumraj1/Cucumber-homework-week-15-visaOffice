Feature:Visa Confirmation check
  As user I want to get visa

  Background:
    Given I am on the Check UK visa website
    And I start visa check

  @smoke@regression
  Scenario: An Australian coming to the UK for Tourism.
    When I select a nationality of "Australia"
    And I  Click on Continue button
    And I select reason "Tourism or visiting family and friends"
    And I  Click on Continue button
    Then I will be informed "You will not need a visa to come to the UK"

  @sanity@regression
  Scenario: A Chilean Coming To The UK For Work And Plans On Staying For Longer Than SixMonths
    When I select a nationality of "Chile"
    And I  Click on Continue button
    And I select reason "Work, academic visit or business"
    And I  Click on Continue button
    And I select Duration of stay "longer than 6 months"
    And I  Click on Continue button
    And I select JobType "Health and care professional"
    And I  Click on Continue button
    And I will be informed "You need a visa to work in health and care"

  @regression
  Scenario:  A Columbian national coming to the UK to join a partner for a long stay. They do have an Article 10 or 20 card.
    When I select a nationality of "Colombia"
    And I  Click on Continue button
    And I select reason "Join partner or family for a long stay"
    And I  Click on Continue button
    And I state My partner or family member have uk immigration status "yes"
    And I  Click on Continue button
    Then I will be informed "You’ll need a visa to join your family or partner in the UK"
