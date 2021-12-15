$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VisaConfirmation.feature");
formatter.feature({
  "line": 1,
  "name": "Visa Confirmation check",
  "description": "As user I want to get visa",
  "id": "visa-confirmation-check",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3400181400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I start visa check",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 201036800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 234455500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "An Australian coming to the UK for Tourism.",
  "description": "",
  "id": "visa-confirmation-check;an-australian-coming-to-the-uk-for-tourism.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoke"
    },
    {
      "line": 8,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I select a nationality of \"Australia\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I  Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select reason \"Tourism or visiting family and friends\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I  Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I will be informed \"You will not need a visa to come to the UK\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Australia",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.iSelectANationalityOf(String)"
});
formatter.result({
  "duration": 113522500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 269984300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tourism or visiting family and friends",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.iSelectReason(String)"
});
formatter.result({
  "duration": 78243900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 356706500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You will not need a visa to come to the UK",
      "offset": 20
    }
  ],
  "location": "VisaConfirmationSteps.iWillBeInformed(String)"
});
formatter.result({
  "duration": 33133900,
  "status": "passed"
});
formatter.after({
  "duration": 690440800,
  "status": "passed"
});
formatter.before({
  "duration": 1826448200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I start visa check",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 61003800,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 161481100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "A Chilean Coming To The UK For Work And Plans On Staying For Longer Than SixMonths",
  "description": "",
  "id": "visa-confirmation-check;a-chilean-coming-to-the-uk-for-work-and-plans-on-staying-for-longer-than-sixmonths",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@sanity"
    },
    {
      "line": 16,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "I select a nationality of \"Chile\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I  Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select reason \"Work, academic visit or business\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I  Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Duration of stay \"longer than 6 months\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I  Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select JobType \"Health and care professional\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I  Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I will be informed \"You need a visa to work in health and care\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Chile",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.iSelectANationalityOf(String)"
});
formatter.result({
  "duration": 63980000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 134730300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Work, academic visit or business",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.iSelectReason(String)"
});
formatter.result({
  "duration": 93734200,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 233133300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "longer than 6 months",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.iSelectDurationOfStay(String)"
});
formatter.result({
  "duration": 41992900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 225139200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Health and care professional",
      "offset": 18
    }
  ],
  "location": "VisaConfirmationSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 123915000,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 350792600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You need a visa to work in health and care",
      "offset": 20
    }
  ],
  "location": "VisaConfirmationSteps.iWillBeInformed(String)"
});
formatter.result({
  "duration": 27220200,
  "status": "passed"
});
formatter.after({
  "duration": 669402900,
  "status": "passed"
});
formatter.before({
  "duration": 1807628100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am on the Check UK visa website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I start visa check",
  "keyword": "And "
});
formatter.match({
  "location": "VisaConfirmationSteps.iAmOnTheCheckUKVisaWebsite()"
});
formatter.result({
  "duration": 50214700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iStartVisaCheck()"
});
formatter.result({
  "duration": 145167700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "A Columbian national coming to the UK to join a partner for a long stay. They do have an Article 10 or 20 card.",
  "description": "",
  "id": "visa-confirmation-check;a-columbian-national-coming-to-the-uk-to-join-a-partner-for-a-long-stay.-they-do-have-an-article-10-or-20-card.",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I select a nationality of \"Colombia\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I  Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I select reason \"Join partner or family for a long stay\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I  Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I state My partner or family member have uk immigration status \"yes\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I  Click on Continue button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I will be informed \"You’ll need a visa to join your family or partner in the UK\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Colombia",
      "offset": 27
    }
  ],
  "location": "VisaConfirmationSteps.iSelectANationalityOf(String)"
});
formatter.result({
  "duration": 55111500,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 112732100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Join partner or family for a long stay",
      "offset": 17
    }
  ],
  "location": "VisaConfirmationSteps.iSelectReason(String)"
});
formatter.result({
  "duration": 99406900,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 659667200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yes",
      "offset": 64
    }
  ],
  "location": "VisaConfirmationSteps.iStateMyPartnerOrFamilyMemberHaveUkImmigrationStatus(String)"
});
formatter.result({
  "duration": 44648700,
  "status": "passed"
});
formatter.match({
  "location": "VisaConfirmationSteps.iClickOnContinueButton()"
});
formatter.result({
  "duration": 300726400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "You’ll need a visa to join your family or partner in the UK",
      "offset": 20
    }
  ],
  "location": "VisaConfirmationSteps.iWillBeInformed(String)"
});
formatter.result({
  "duration": 26718500,
  "status": "passed"
});
formatter.after({
  "duration": 643219300,
  "status": "passed"
});
});