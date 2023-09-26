package com.example.ijoa.Service;

import com.example.ijoa.Domain.Client;
import com.example.ijoa.Domain.KidCare;
import com.example.ijoa.Dto.ClientRegisterDto;
import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
import com.example.ijoa.Repository.ClientRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.http.HttpRequest;

@Service
@Transactional
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public int join(JoinDto dto){
        return clientRepository.join(dto);
    }
    public int login(LoginDto dto){
        return clientRepository.login(dto);
    }
    public Client findById(String id) {
        return clientRepository.findById(id);
    }

}
