package com.and.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/* TODO Replace the 'Data' tag with getters, setters and own implemented equals and hashcode */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Entity
public class LearningResource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String link;
    private String user;
    private String subject;
    private String club;
    private String type;
    private String description;

}
