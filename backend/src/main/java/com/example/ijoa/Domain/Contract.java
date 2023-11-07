package com.example.ijoa.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int contract_id;
    @ManyToOne
    private Client client;
    @ManyToOne
    private Applier applier;
    private String start_date;
    private String end_date;
    private String start_time;
    private String end_time;
    private String region;
    private String place;
    @ElementCollection
    private List<String> care_type;
    private int cost;
    private String payment_state;
}
