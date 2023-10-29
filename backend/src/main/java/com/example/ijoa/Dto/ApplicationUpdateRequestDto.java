package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ApplicationUpdateRequestDto {
    private List<String> day;
    private List<String> time;
    private List<String> hopeAge;
    private String sex;
    private List<String> careTerm;
    private String region;
    private List<String> careType;
    private String description;
    private String content;
}
