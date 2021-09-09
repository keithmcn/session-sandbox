package com.and.components;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class CreateResourceForm {

    private final WebElement form;

    public CreateResourceForm(WebDriver driver) {
        this.form = driver.findElement(By.id("createResourceForm"));
    }

    public CreateResourceForm setTitle(String title){
        this.form.findElement(By.id("title")).sendKeys(title);
        return this;
    }

    public CreateResourceForm submit(){
        this.form.submit();
        return this;
    }

}
