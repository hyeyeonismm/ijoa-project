package com.example.ijoa.Service;

import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
import com.example.ijoa.Repository.ClientRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ClientService {
    @Autowired
    private ClientRepository clientRepository;

    public int join(JoinDto dto){
        return clientRepository.join(dto);
    }
    public boolean login(LoginDto dto){
        return true;
    }
}
