package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class ReasonForTravelPage extends Utility {
    private static final Logger log = LogManager.getLogger(ReasonForTravelPage.class.getName());

    public ReasonForTravelPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']")
    WebElement nextStepButton;
    @FindBy(xpath = "//div[@class='govuk-radios']//label")
    List<WebElement> reasonForVisitList;

    public void selectReasonForVisit(String selectReason) {

        for (WebElement reason : reasonForVisitList) {
            if (reason.getText().equalsIgnoreCase(selectReason)) {
                reason.click();
                break;
            }
        }
        log.info("Select Reason For Visit" + reasonForVisitList.toString());
    }

    public void clickNextStepButton() {
        clickOnElement(nextStepButton);
        log.info("Click On Continue Button" + nextStepButton.toString());

    }


}
