package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;


public class DurationOfStayPage extends Utility {
    private static final Logger log = LogManager.getLogger(DurationOfStayPage.class.getName());

    public DurationOfStayPage() {
        PageFactory.initElements(driver, this);
    }

    //     nextStepButton, lessThanSixMonths, moreThanSixMonths locators and create methods
//  'void selectLengthOfStay(String moreOrLess)' (Note: use switch statement for select moreOrLess stay) and
//  'void clickNextStepButton()'
    @CacheLookup
    @FindBy(xpath = "//main[@role='main']//label")
    List<WebElement> durationTabs;
    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']")
    WebElement continueButton;

    public void selectDurationOfStay(String duration) {
        switch (duration) {
            case "6 months or less":
                durationTabs.get(0).click();
                break;
            case "longer than 6 months":
                durationTabs.get(1).click();
                break;
        }
        log.info("Select Duration Of stay"+ durationTabs.toString());
    }

    public void clickOnContinue() {

        clickOnElement(continueButton);
        log.info("Click On continue Button "+ continueButton.toString());

    }
}
