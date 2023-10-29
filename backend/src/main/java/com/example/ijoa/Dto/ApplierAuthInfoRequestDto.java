package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class ApplierAuthInfoRequestDto {

    private String name;
    private String issueDate;
    private String idNumber;
}
