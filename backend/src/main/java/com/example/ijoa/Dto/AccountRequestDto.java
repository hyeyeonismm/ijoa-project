package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class AccountRequestDto {
    private String depositor;
    private String bank;
    private String account;
}
