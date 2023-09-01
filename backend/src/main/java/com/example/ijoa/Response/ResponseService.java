package com.example.ijoa.Response;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponseService {

    public<T> SingleResponse<T> getSingleResponse(T data){
        SingleResponse singleResponse = new SingleResponse(true, "SUCCESS");
        singleResponse.data = data;

        return singleResponse;
    }

    public<T> ListResponse<T> getListResponse(List<T> dataList){
        ListResponse listResponse = new ListResponse(true, "SUCCESS");
        listResponse.dataList = dataList;

        return listResponse;
    }

}
