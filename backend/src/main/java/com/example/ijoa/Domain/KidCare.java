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
    private String title;
    private String date;
    private String time;
    private int cost;
    private String region;
    @ElementCollection
    private List<String> care_type = new ArrayList<>();
    private String place;
    private String content;
    private String state;

    
}
