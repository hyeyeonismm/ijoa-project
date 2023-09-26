package com.example.ijoa.Dto;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Domain.KidCare;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.ElementCollection;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ContractDto {

    @JsonIgnore
    private Client client;
    @JsonIgnore
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
