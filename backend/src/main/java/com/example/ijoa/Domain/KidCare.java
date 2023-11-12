package com.example.ijoa.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class KidCare {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int care_id;
    @JsonIgnore
    @ManyToOne
    private Client client;
    private String date;
    private String time;
    private int cost;
    private String region;
    private String si;
    private String gu;
    private String dong;
    private String gender;
    private String age;
    private String special_note;
    @ElementCollection
    private List<String> care_term;
    @ElementCollection
    private List<String> care_type;
    private String place;
    private String content;
    private String title;
    private String state;

    
}
