package com.jobseeker.server.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jobseeker.server.constants.APIConstants;
import com.jobseeker.server.dto.PostDTO;
import com.jobseeker.server.model.PostModal;
import com.jobseeker.server.service.PostService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequiredArgsConstructor
@CrossOrigin
public class PostController {
	
	 final PostService postService;
  
	@PostMapping(APIConstants.SAVE_POST)
	public PostModal savePost(@Valid @RequestBody PostDTO postDTORequest) {
		log.info("saving post ####");
		
		return this.postService.savePost(postDTORequest);
		
	}
	@GetMapping(APIConstants.GET_ALL_POSTS)
	public List<PostModal> getAllPosts(){
		log.info("Getin All Posts ####");
		return this.postService.getAllPosts();
	}
}
