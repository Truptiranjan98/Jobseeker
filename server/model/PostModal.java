package com.jobseeker.server.model;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Document(collection=" post")
@Data
public class PostModal {
     @NotNull
     @NotEmpty
	 private String profile;
     @NotNull
	 private String type;
     @NotNull
	 private String description;
     @NotNull
	 private String experience;
     @NotNull
	 private String technology[];
     @NotNull
	 private String salary;
     @CreatedDate   
	 private Date createdAt;
}