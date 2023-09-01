package com.example.ijoa.Response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CommonResponse {
    boolean success;
    String message;

    public CommonResponse(boolean success, String message){
        this.success = success;
        this.message = message;
    }
}
