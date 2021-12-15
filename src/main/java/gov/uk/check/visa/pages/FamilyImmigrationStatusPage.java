package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class FamilyImmigrationStatusPage extends Utility {
    private static final Logger log = LogManager.getLogger(FamilyImmigrationStatusPage.class.getName());

    public FamilyImmigrationStatusPage() {
        PageFactory.initElements(driver, this);
    }
    //    nextStepButton, yes, no locators and create methods 'void selectImmigrationStatus(String status)'
//  (Note: Use switch statement for select immigration status) and 'void clickNextStepButton()'
    @CacheLookup
    @FindBy(xpath = " //div[@class='govuk-radios']//input")
    List<WebElement> visaYesOrNo;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']") //button[normalize-space()='Continue']
    WebElement nextStepButton;

    public void selectImmigrationStatus(String reply) {

        switch (reply) {
            case "yes":
                visaYesOrNo.get(0).click();
                break;
            case "no":
                visaYesOrNo.get(1).click();
                break;
        }
        log.info("Select Duration Of stay"+ visaYesOrNo.toString());

    }

    public void clickNextStepButton() {
        clickOnElement(nextStepButton);
        log.info("Click On Continue Button"+ nextStepButton.toString());

    }

}
