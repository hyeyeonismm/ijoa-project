package com.example.ijoa.Service;

import com.example.ijoa.Domain.Application;
import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Dto.*;
import com.example.ijoa.Repository.ApplicationRepository;
import com.example.ijoa.Repository.ApplierAuthRepository;
import com.example.ijoa.Repository.ApplierRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ApplierService {
    @Autowired
    private ApplierRepository applierRepository;
    @Autowired
    private ApplicationRepository applicationRepository;


    public int join(JoinDto dto) {return applierRepository.join(dto);}

    public int login(LoginDto dto) {return applierRepository.login(dto);}
    public Applier findById(String id) {
        return applierRepository.findById(id);
    }




}
