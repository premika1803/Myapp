package runner;//finology.com

import java.beans.Transient;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringDecorator;
import org.openqa.selenium.support.events.WebDriverListener;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import utils.EventHandler;
import utils.ExcelReader;

public class TestSample {
    public static WebDriver driver;
    
    @BeforeMethod
    public void openBrowser() throws MalformedURLException {
        ChromeOptions options = new ChromeOptions();
        driver = new RemoteWebDriver(new URL("http://localhost:4444/"), options);
        
        WebDriverListener listener = new EventHandler();
        driver = new EventFiringDecorator<>(listener).decorate(driver);
    }
    @Test
    public void test(){
        driver.manage().window().maximize();
        driver.get("https://www.finology.in/");
        driver.findElement(By.xpath("/html/body/div[1]/div[3]/a[4]")).click();
        try {
            driver.findElement(By.xpath("//*[@id=\"mobile\"]")).sendKeys(ExcelReader.readdata("/home/coder/project/workspace/Project/data.xlsx","Sheet1", 0, 0));
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        driver.findElement(By.xpath("//*[@id=\"btnNext\"]")).click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        driver.findElement(By.xpath("//*[@id=\"frmVerification\"]/div[1]/label")).isDisplayed();

    }
    @AfterMethod
    public void closeBrowser() {
        if (driver != null) {
            driver.quit();
        }
    }
}