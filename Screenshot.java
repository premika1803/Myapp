package utils;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

public class Screenshot {
    public static void screenshot(String filename,WebDriver driver){
         String foldername="screenshots/";
         File file=((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
         try {
            FileUtils.copyFile(file, new File(foldername+filename+".png"));
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
         
    }
}




//in Testspice  add @Test and function

   @Test
    public void test(){
         Screenshot.screenshot("testscreenshot", driver);
    }