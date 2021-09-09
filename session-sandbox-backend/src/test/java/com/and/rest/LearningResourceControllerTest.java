package com.and.rest;

import com.and.repo.LearningResourceRepo;
import com.and.model.LearningResource;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.assertj.core.util.Streams;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.equalTo;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@SpringBootTest
@AutoConfigureMockMvc
class LearningResourceControllerTest {

    private static final String ENDPOINT = "/api/resources";

    @Autowired
    private MockMvc mvc;

    @Autowired
    private LearningResourceRepo repo;

    private ObjectMapper objectMapper = new ObjectMapper();

    private LearningResource sampleLearningResource;

    @BeforeEach
    void setUp() {
        sampleLearningResource = new LearningResource();
        sampleLearningResource.setTitle("My New Learning Resource");
        repo.save(sampleLearningResource);
    }

    @AfterEach
    void tearDown() {
        repo.deleteAll();
    }

    @Test
    void testGetAllResources() throws Exception {

        MockHttpServletResponse response = mvc.perform(get(ENDPOINT)
                .accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andReturn().getResponse();

        List<LearningResource> result = objectMapper.readValue(response.getContentAsString(),
                new TypeReference<List<LearningResource>>() {
                });

        assertThat(result.get(0), equalTo(sampleLearningResource));
    }

    @Test
    void testCreateResource() throws Exception {
        String title = "Yet another resource";
        LearningResource newResource = new LearningResource();
        newResource.setTitle(title);

        String resourceAsJson = objectMapper.writeValueAsString(newResource);

        mvc.perform(post(ENDPOINT)
                .content(resourceAsJson)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isCreated());

        Optional<LearningResource> found = Streams.stream(repo.findAll())
                .filter(resource -> title
                        .equals(resource.getTitle()))
                .findFirst();

        assertTrue(found.isPresent());
    }

}
