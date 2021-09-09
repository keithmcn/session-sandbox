package com.and.dao;

import com.and.model.LearningResource;

import java.util.List;

public interface LearningResourceDao {
    List<LearningResource> getAll();

    void create(LearningResource learningResource);

}
