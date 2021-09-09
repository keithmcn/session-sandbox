package com.and.steps;

import com.and.repo.LearningResourceRepo;
import com.and.model.LearningResource;
import com.and.spring.SpringBootAppRunner;
import com.and.components.CreateResourceForm;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.assertj.core.util.Streams;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Wait;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import javax.persistence.EntityManager;
import java.time.Duration;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.matchesPattern;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class BasicSteps extends SpringBootAppRunner {

    @Value("${server.url}")
    private String url;

    @Autowired
    private LearningResourceRepo repo;

    @Autowired
    private EntityManager entityManager;

    private Wait<WebDriver> fluentWait;

    private CreateResourceForm createResourceForm;

    @Before
    public void setUp() {
        super.createDriver();
        driver.get(url);

        fluentWait = new FluentWait<>(driver)
                .withTimeout(Duration.ofSeconds(60))
                .pollingEvery(Duration.ofSeconds(2))
                .ignoring(NoSuchElementException.class);

        createResourceForm = new CreateResourceForm(driver);
    }

    @After
    public void tearDown() {
        driver.quit();
        repo.deleteAll();
    }

    @Given("I am viewing the create resource page")
    public void i_am_viewing_the_create_resource_page() {
        String title = driver.getTitle();

        Assert.assertEquals("ANDi Resources", title);
    }

    @When("I enter new resource title as {string}")
    public void i_enter_resource_title_as(String resourceTitle) {
        this.createResourceForm.setTitle(resourceTitle);
    }

    @When("I submit the Form")
    public void i_submit_the_Form() {
        this.createResourceForm.submit();
    }

    @Then("The returned status code is {int} and the message is {string}")
    public void the_returned_status_code_is_and_the_message_is(Integer statusCode, String message) throws InterruptedException {
        WebElement feedbackBlock = fluentWait.until(
                ExpectedConditions.visibilityOfElementLocated(By.id("feedbackMessage"))
        );

        assertThat(feedbackBlock.getText(),
                matchesPattern("^.*" + statusCode + ".*" + message + ".*$"));

    }

    @And("The database contains a new Learning Resource with the title {string}")
    public void theDatabaseContainsANewLearningResourceWithTheTitle(String resourceTitle) {
        Optional<LearningResource> found = Streams.stream(repo.findAll())
                .filter(resource -> resourceTitle
                        .equals(resource.getTitle()))
                .findFirst();

        assertTrue(found.isPresent());
    }

}
