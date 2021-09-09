package com.and.dao;

import com.and.model.LearningResource;
import com.and.repo.LearningResourceRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class JpaLearningResourceDao implements LearningResourceDao {


    private final LearningResourceRepo learningResourceRepo;
    @Autowired
    public JpaLearningResourceDao(LearningResourceRepo learningResourceRepo) {
        this.learningResourceRepo = learningResourceRepo;
    }


    @Override
    public List<LearningResource> getAll() {
        List<LearningResource> list = new ArrayList<>();
        learningResourceRepo.findAll().forEach(list::add);
        return list;
    }

    @Override
    public void create(LearningResource learningResource) {
        learningResourceRepo.save(learningResource);
    }
}
