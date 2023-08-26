package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Client;
import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
import org.springframework.stereotype.Repository;

@Repository
public class CommonRepositoryImpl implements CommonRepository{

    public int join(JoinDto dto){
        if(dto.getPosition()=="client"){
            Client client = new Client();
            client.setName(dto.getName());
            client.setId(dto.getId());
            client.setPw(dto.getPw());
            client.setName(dto.getNickname());
            client.setBirth(dto.getBirth());
            client.setEmail(dto.getEmail());
            client.setAddress(dto.getAddress());
            client.setImage_url(dto.getImage_url());
            client.setGender(dto.getGender());
            client.setPhone(dto.getPhone());


        }
        return 0;
    }
    public int login(LoginDto dto){
        return 0;
    }

}
