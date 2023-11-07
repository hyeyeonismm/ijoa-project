package com.example.ijoa.Service;

import com.example.ijoa.Domain.Application;
import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Dto.ApplicationRequestDto;
import com.example.ijoa.Dto.ApplicationUpdateRequestDto;
import com.example.ijoa.Dto.ApplierSearchDto;
import com.example.ijoa.Repository.ApplicationRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ApplicationService {

    @Autowired
    private ApplicationRepository applicationRepository;

    public  int registerApplication(HttpServletRequest request, ApplicationRequestDto dto){
        return applicationRepository.registerApplication(request,dto);
    }

    public Application findApplicationId(String id){
        return applicationRepository.findApplicationId(id);
    }

    public int deleteApplication(String id){
        return applicationRepository.deleteApplication(id);
    }
    public int updateApplication(String id, ApplicationUpdateRequestDto dto){
        return applicationRepository.updateApplication(id,dto);
    }
    public List<Applier> search(ApplierSearchDto dto) {
        return applicationRepository.search(dto);
    }
}
