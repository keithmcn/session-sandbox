package com.and.dao;

import com.and.model.LearningResource;
import com.and.repo.LearningResourceRepo;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Arrays;
import java.util.List;

import static org.mockito.Mockito.*;

class JpaLearningResourceDaoTest {

    private JpaLearningResourceDao dao;

    private LearningResourceRepo repo;

    @BeforeEach
    void setUp() {
        repo = mock(LearningResourceRepo.class);
        dao = new JpaLearningResourceDao(repo);
    }

    @Test
    void testGetAll() {
        List<LearningResource> resources = Arrays.asList(learningResource("Java"),
                learningResource("Python"));
        when(repo.findAll()).thenReturn(resources);
        List<LearningResource> result = dao.getAll();

        assertEquals(result, resources);
    }

    @Test
    void testCreate() {
        LearningResource resource = learningResource("SQL");
        dao.create(resource);

        verify(repo).save(resource);
    }

    private LearningResource learningResource(String title) {
        LearningResource resource = new LearningResource();
        resource.setTitle(title);
        return resource;
    }

}