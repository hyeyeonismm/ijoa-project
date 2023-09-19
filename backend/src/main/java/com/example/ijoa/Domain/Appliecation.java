package com.example.ijoa.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Appliecation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int application_id;
    @OneToOne
    private Applier applier;
    @ElementCollection
    private List<String> day;
    @ElementCollection
    private List<String> time;
    @ElementCollection
    private List<String> hope_age;
    private String gender;
    @ElementCollection
    private List<String> care_term;
    private String region;
    @ElementCollection
    private List<String> care_type;
    private String description;
    private String content;

}
