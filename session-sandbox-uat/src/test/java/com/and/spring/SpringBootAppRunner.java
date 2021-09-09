package com.and.spring;

import com.and.SessionSandboxApplication;
import com.and.os.OsFinder;
import io.cucumber.spring.CucumberContextConfiguration;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.springframework.boot.test.context.SpringBootTest.WebEnvironment.DEFINED_PORT;

@CucumberContextConfiguration
@ActiveProfiles("uat")
@SpringBootTest(classes = SessionSandboxApplication.class, webEnvironment = DEFINED_PORT,
        properties = "target.server.port=8081")
public abstract class SpringBootAppRunner {

    protected static WebDriver driver;

    protected void createDriver() {
        WebDriverManager.chromedriver()
                .version("92")
                .operatingSystem(OsFinder.OPERATING_SYSTEM).setup();
        ChromeOptions options = new ChromeOptions();
        options.addArguments("--headless");
        options.addArguments("--allow-insecure-localhost");
        driver = new ChromeDriver(options);
    }

}
