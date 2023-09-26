package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ContractDto {
    private int contract_id;
    private String applier_name;
    private String time;
    private String region;
    private String care_type;
    private String payment_statement;
}
