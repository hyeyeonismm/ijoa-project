package com.example.ijoa.Service;

import com.example.ijoa.Domain.KidCare;
import com.example.ijoa.Dto.ClientRegisterDto;
import com.example.ijoa.Repository.KidCareRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class KidCareService {

    @Autowired
    private KidCareRepository kidCareRepository;

    public int register(HttpServletRequest request, ClientRegisterDto dto){
        return kidCareRepository.register(request, dto);
    }

    public KidCare detailView(int post_id) {return kidCareRepository.detailView(post_id);}
}
