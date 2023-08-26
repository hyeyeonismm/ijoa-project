package com.example.ijoa.Service;

import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
import com.example.ijoa.Repository.CommonRepository;

public class CommonService {
    private CommonRepository commonRepository;

    public boolean join(JoinDto dto){
        return true;
    }
    public boolean login(LoginDto dto){
        return true;
    }
}
