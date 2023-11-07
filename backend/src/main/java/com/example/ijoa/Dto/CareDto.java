package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;

//돌봄 리스트 중 한 개의 돌봄
@Getter
@Setter
public class CareDto {
    private String profileImg;
    private String name;
    private String address;
    private String title;
    private String term;
}
