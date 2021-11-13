package com.and.rest;

import com.and.dao.CustomerDao;
import com.and.dao.LearningResourceDao;
import com.and.model.Customer;
import com.and.model.LearningResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(path = "/api/resources")
@Validated
public class LearningResourceController {

    private static Logger LOGGER = LoggerFactory.getLogger(LearningResourceController.class);

    @Autowired
    private LearningResourceDao learningResourceDao;

    private CustomerDao dao = new CustomerDao();

//    @GetMapping(produces = {APPLICATION_JSON_VALUE})
//    @ResponseStatus(HttpStatus.OK)
//    public @ResponseBody
//    Iterable<LearningResource> getAllLearningResource() {
//        LOGGER.info("Call to getAllLearningResources");
//        return this.learningResourceDao.getAll();
//    }

    @GetMapping(produces = {APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.OK)
    public @ResponseBody
    Iterable<Customer> getAllCustomers() {
        LOGGER.info("Call to getAllCustomers");
        return this.dao.getAll();
    }

    @PostMapping(consumes = {APPLICATION_JSON_VALUE}, produces = {APPLICATION_JSON_VALUE})
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<String> createLearningResource(@RequestBody LearningResource learningResource) {
        LOGGER.info("Call to createLearningResource, with value: {}", learningResource);
        this.learningResourceDao.create(learningResource);

        return ResponseEntity.status(HttpStatus.CREATED).body("Resource Created");
    }

}
