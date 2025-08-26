package runner;

import java.io.IOException;
import java.util.logging.Logger;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;

import utils.Base;
import utils.ExcelReader;
import utils.LoggerHandler;
import utils.Reporter;
import utils.Screenshot;
import utils.WebDriverHelper;

public class TestRunner extends Base {
    WebDriverHelper helper;
    ExtentReports report;
    ExtentTest test;
    @BeforeMethod
    public void beforeMethod(){
        openBrowser();
        helper=new WebDriverHelper(driver);
        report=Reporter.generateExtentReport("reportname");

    }
    @Test
    public void test3(){
        WebElement ele = driver.findElement(By.id("country"));
        Select select = new Select(ele);
        select.selectByVisibleText("Algeria");
        try {
            Thread.sleep(5000);
        } catch (Exception e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }

    // @Test
    public void test(){

        test=report.createTest("reporttest");
        test.info("test started");

        //  WebElement search= driver.findElement(By.name("q"));
        //  search.sendKeys("java");
        //  search.submit();
        helper.sendKeys(By.name("q"), "java");
        helper.enterAction(By.name("q"));
         
        LoggerHandler.info("searched java");


        test.pass("clicked button");


         try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        Screenshot.captureScreenShot("reader");
        Reporter.attachScreenshotToReport("screenchotreport",test,"saved");
          

    }
    // @Test
    public void test1(){

        test=report.createTest("reporttest2");
        test.info("test started");

        //  WebElement search= driver.findElement(By.name("q"));
        //  search.sendKeys("java");
        //  search.submit();
        try {
            helper.sendKeys(By.name("q"), ExcelReader.readdata("/home/coder/project/workspace/Project/data.xlsx", "Sheet1", 0, 0));
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        helper.enterAction(By.name("q"));
         
        LoggerHandler.info("searched java");


        test.pass("clicked button");


         try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        Screenshot.captureScreenShot("reader");
        Reporter.attachScreenshotToReport("screenchotreport",test,"saved");
          

    }
    @AfterMethod
    public void afterMethod(){
        driver.quit();
    }
    @AfterClass
    public void afterclass(){
        report.flush();
    }
}



//navigate
@Test
	public void test2() {
		WebElement search=driver.findElement(By.name("q"));
		search.sendKeys("java");
		search.submit();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Set<String>str=driver.getWindowHandles();
		driver.findElement(By.cssSelector(".b_algo h2 > a")).click();
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		System.out.println(driver.getCurrentUrl());
		Set<String>arr=driver.getWindowHandles();
		for(String windows:arr) {
			if(!str.contains(windows)) {
				driver.switchTo().window(windows);
				break;
			}
		}
		System.out.println(driver.getCurrentUrl());
		}




//mouseover
//@Test
    public void testRedbus() {
        WebDriver driver = null;
        try{
        	driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
        driver.manage().timeouts().pageLoadTimeout(Duration.ofSeconds(15));

        driver.get("https://www.amazon.in");


        WebElement sign = driver.findElement(By.id("nav-link-accountList"));
        
        Actions obj = new Actions(driver);
        obj.moveToElement(sign).perform();
        Thread.sleep(1000);
        driver.findElement(By.className("nav-action-signin-button")).click();
        Thread.sleep(1000);
        driver.navigate().back();
        Thread.sleep(2000);
        WebElement search = driver.findElement(By.id("twotabsearchtextbox"));
        search.sendKeys("Vivo v25");
        search.submit();
        Thread.sleep(2000);
        } catch(Exception e){

        } finally {
            if(driver != null)
            driver.quit();
        }
    }