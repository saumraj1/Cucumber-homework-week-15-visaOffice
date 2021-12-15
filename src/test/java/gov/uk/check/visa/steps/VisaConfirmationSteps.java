package gov.uk.check.visa.steps;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gov.uk.check.visa.pages.*;
import org.testng.Assert;

/**
 * By Nidhi Patel
 **/
public class VisaConfirmationSteps {
    @When("^I select a nationality of \"([^\"]*)\"$")
    public void iSelectANationalityOf(String nationality) throws Throwable {
        new SelectNationalityPage().selectNationality(nationality);
    }

    @And("^I  Click on Continue button$")
    public void iClickOnContinueButton() {
        new SelectNationalityPage().clickNextStepButton();
    }

    @And("^I select reason \"([^\"]*)\"$")
    public void iSelectReason(String reason) throws Throwable {
        new ReasonForTravelPage().selectReasonForVisit(reason);
    }

    @Then("^I will be informed \"([^\"]*)\"$")
    public void iWillBeInformed(String expected) throws Throwable {
        Assert.assertEquals(expected,new ResultPage().getResultMessage());

    }

    @Given("^I am on the Check UK visa website$")
    public void iAmOnTheCheckUKVisaWebsite() {
        new StartPage().clickCookiesAccept();
    }

    @And("^I start visa check$")
    public void iStartVisaCheck() {
new StartPage().clickStartNowButton();
    }


    @And("^I select JobType \"([^\"]*)\"$")
    public void iSelectJobType(String jobType) throws Throwable {
        new WorkTypePage().selectJobType(jobType);
    }

    @And("^I select Duration of stay \"([^\"]*)\"$")
    public void iSelectDurationOfStay(String duration) {
        new DurationOfStayPage().selectDurationOfStay(duration);

    }

    @And("^I state My partner or family member have uk immigration status \"([^\"]*)\"$")
    public void iStateMyPartnerOrFamilyMemberHaveUkImmigrationStatus(String status) throws Throwable {
      new FamilyImmigrationStatusPage().selectImmigrationStatus(status);
    }
}
