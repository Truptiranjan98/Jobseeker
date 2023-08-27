package com.jobseeker.server.service;

import java.util.List;

import com.jobseeker.server.dto.PostDTO;
import com.jobseeker.server.model.PostModal;

public interface PostService {

   public PostModal savePost(PostDTO postDTO);
   
   public List<PostModal> getAllPosts();
}