package com.and.repo;

import com.and.model.LearningResource;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LearningResourceRepo extends PagingAndSortingRepository<LearningResource, Long> {

}
