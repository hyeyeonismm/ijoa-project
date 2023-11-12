package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class KidCareSearchDto {
    List<String> care_type;
    List<String> care_term;
    List<String> care_day;
    List<String> care_time;
    String si;
    String gu;
    String dong;
}
