package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class ApplierAuthAbilityRequestDto {
    private String startDate;
    private String endDate;
    private MultipartFile applierAbilityFile;
}
