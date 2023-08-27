package com.jobseeker.server.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jobseeker.server.dao.PostDao;
import com.jobseeker.server.dto.PostDTO;
import com.jobseeker.server.model.PostModal;

@Service
public class PostServiceImp implements PostService {
	@Autowired
	PostDao postDao;

	@Override
	public PostModal savePost(PostDTO postDTO) {
		PostModal PostModal=new PostModal();
		
		PostModal.setProfile(postDTO.getProfile());
		PostModal.setDescription(postDTO.getDescription());
		PostModal.setSalary(postDTO.getSalary());
		PostModal.setTechnology(postDTO.getTechnology());
		PostModal.setType(postDTO.getType());
		PostModal.setExperience(postDTO.getExperience());
		
		return postDao.save(PostModal);
	}

	@Override
	public List<PostModal> getAllPosts() {
		
		return postDao.findAll();
	}

}
