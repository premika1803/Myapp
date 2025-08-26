package Groww_Test;

import java.beans.Transient;
import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;
import org.openqa.selenium.support.events.EventFiringDecorator;
import org.openqa.selenium.support.events.WebDriverListener;
import utils.EventHandler;
public class Test_groww {
    public static WebDriver driver;
	

 @BeforeMethod
    public WebDriver beforeMethod() throws MalformedURLException {
		ChromeOptions chromeOptions = new ChromeOptions();
		driver = new RemoteWebDriver(new URL("http://localhost:4444/"), chromeOptions);
	   driver.manage().window().maximize();
		driver.get("https://groww.in/");

		driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(20));
        WebDriverListener listener = new EventHandler();
		driver = new EventFiringDecorator<>(listener).decorate(driver);
		return driver;
		
    }
	@Test
	public void test(){
       driver.findElement(By.xpath("//*[@id=\"footer\"]/div/div[2]/div[3]/div[1]/div/div[6]/span")).click();
	   driver.findElement(By.xpath("//*[@id=\"footer\"]/div/div[2]/div[3]/div[2]/div/div[6]/div[1]/a[5]")).click();
	   try {
        Thread.sleep(2000);
    } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
	   
	   driver.findElement(By.id("LOAN_AMOUNT")).sendKeys("23,00,000");
	   try {
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
	   
	 
	   
	   driver.findElement(By.id("RATE_OF_INTEREST")).sendKeys("6.5");
	   try {
        Thread.sleep(1000);
    } catch (InterruptedException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
    }
	   
	   driver.findElement(By.id("LOAN_TENURE")).sendKeys("25");
	   try {
		Thread.sleep(1000);
	} catch (InterruptedException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}

       

	}
	@AfterMethod
	public void aftermethod(){
		driver.quit();
	}
}


