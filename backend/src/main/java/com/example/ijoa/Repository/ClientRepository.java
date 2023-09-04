package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Client;
import com.example.ijoa.Dto.CareListResponseDto;
import com.example.ijoa.Dto.ClientRegisterDto;
import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface ClientRepository extends JpaRepository<Client,Integer> {
    public int join(JoinDto dto);
    public int login(LoginDto dto);
    public Client findById(String id);

    public int register(HttpServletRequest request, ClientRegisterDto dto);
}
