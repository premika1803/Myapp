package runner;

import java.beans.Transient;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Set;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.events.EventFiringDecorator;
import org.openqa.selenium.support.events.WebDriverListener;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import ch.qos.logback.core.joran.action.Action;
import utils.EventHandler;

public class TestSpice {
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
          driver.get("https://www.spicejet.com/");
         
          Set<String>sign=driver.getWindowHandles();
          driver.findElement(By.xpath("//*[@id=\"main-container\"]/div/div[1]/div[2]/div[1]/div/div[3]/div[2]/div/a/div")).click();
          try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
          Set<String>child=driver.getWindowHandles();
          for(String arr:child){
            if(!sign.contains(arr)){
                driver.switchTo().window(arr);
                break;
            }
          }
          System.out.println(driver.getCurrentUrl());


    }
    @Test
    public void test1(){
        driver.manage().window().maximize();
        driver.get("https://www.spicejet.com/");
       
        WebElement ele=driver.findElement(By.xpath("//*[@id=\"main-container\"]/div/div[1]/div[2]/div[1]/div/div[2]/div[2]/div/div[1]/div[1]"));
        Actions actions=new Actions(driver);
        actions.moveToElement(ele).perform();
        Set<String>parent=driver.getWindowHandles();
        driver.findElement(By.xpath("//*[@id=\"main-container\"]/div/div[1]/div[2]/div[1]/div/div[2]/div[2]/div/div[2]/div[2]/div/div/div[11]/div/div/div[1]/a/div/div")).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        Set<String>child=driver.getWindowHandles();
        for(String arr:child){
            if(!parent.contains(arr)){
                driver.switchTo().window(arr);
            }
        }
        driver.findElement(By.xpath("//*[@id=\"slick-slide00\"]/div[1]/button")).click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        
        driver.findElement(By.xpath("//*[@id=\"content1\"]/div[2]/div/input")).sendKeys("1234567890");
        driver.findElement(By.xpath("//*[@id=\"content1\"]/div[4]/button[2]")).click();


            
    

    }
    
    @AfterMethod
    public void closeBrowser() {
        if (driver != null) {
            driver.quit();
        }
    }
}