package com.example.ijoa.Response;

public class SingleResponse<T> extends CommonResponse{
    T data;

    public SingleResponse(boolean success, String message) {
        super(success, message);
    }
}
