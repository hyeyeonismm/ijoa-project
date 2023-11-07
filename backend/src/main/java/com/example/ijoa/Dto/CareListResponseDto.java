package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

//지원자가 확인하는 돌봄 리스트
@Getter
@Setter
public class CareListResponseDto {
    List<CareDto> care_list = new ArrayList<>();
}
