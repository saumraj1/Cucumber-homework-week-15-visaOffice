package gov.uk.check.visa.pages;

import gov.uk.check.visa.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectNationalityPage extends Utility {
    private static final Logger log = LogManager.getLogger(SelectNationalityPage.class.getName());

    public SelectNationalityPage() {
        PageFactory.initElements(driver,this);
    }
    //nationalityDropDownList, nextStepButton locators and create methods  'void selectNationality(String nationality)'
    //  and 'void clickNextStepButton()'

    @CacheLookup
    @FindBy(xpath = "//select[@id='response']") //select[@id='response']
    WebElement nationalityDropDownList;

    @CacheLookup
    @FindBy(xpath = "//button[normalize-space()='Continue']") //button[normalize-space()='Continue']
    WebElement nextStepButton;

    public void selectNationality(String country){
        log.info("select nationality: "+nationalityDropDownList.toString());
        selectByVisibleTextFromDropDown(nationalityDropDownList,country);
    }
    public void clickNextStepButton(){
        log.info("click on continue button "+nextStepButton.toString());
        clickOnElement(nextStepButton);
    }

}
