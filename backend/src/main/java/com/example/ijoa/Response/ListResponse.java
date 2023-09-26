package com.example.ijoa.Response;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class ListResponse<T> extends CommonResponse{

    List<T> dataList;

    public ListResponse(boolean success, String message) {
        super(success, message);
    }
}
