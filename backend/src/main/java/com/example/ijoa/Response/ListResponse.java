package com.example.ijoa.Response;

import java.util.List;

public class ListResponse<T> extends CommonResponse{

    List<T> dataList;

    public ListResponse(boolean success, String message) {
        super(success, message);
    }
}
