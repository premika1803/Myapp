package runner;
public class testrunner Base{
   @BeforeMethod
   public void launch(){
    openBrowser();
   }
   @Test
   public void test(){
         
   }
   @AfterMethod
   public void afterMethod()
   driver.quit();
}