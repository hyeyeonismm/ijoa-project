package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Getter
@Setter
public class ClientRegisterDto {
    private String title;
    private String date;
    private String time;
    private int cost;
    private String place;
    private String content;
    private String region;
    private List<String> care_type;
    private List<String> care_term;
}
