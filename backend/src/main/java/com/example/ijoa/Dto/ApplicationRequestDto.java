package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ApplicationRequestDto {
    private List<String> day;
    private List<String> time;
    private List<String> hopeAge;
    private List<String> sex;
    private List<String> careTerm;
    private String si;
    private String gu;
    private List<String> dong;
    private List<String> careType;
    private String description;
    private String content;
}
