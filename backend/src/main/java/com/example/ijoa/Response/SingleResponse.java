package com.example.ijoa.Response;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SingleResponse<T> extends CommonResponse{
    T data;


    public SingleResponse(boolean success, String message) {
        super(success, message);
    }
}
