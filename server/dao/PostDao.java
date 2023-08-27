package com.jobseeker.server.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.jobseeker.server.model.PostModal;

public interface PostDao extends MongoRepository<PostModal, String> {
}