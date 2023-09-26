package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Application;
import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Dto.ApplicationRequestDto;
import com.example.ijoa.Dto.ApplicationUpdateRequestDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplicationRepository extends JpaRepository<Application,Integer> {



    public Applier findById(String id);

    public int registerApplication(HttpServletRequest request, ApplicationRequestDto dto);

    public Application findApplicationId(String id);

    public int deleteApplication(String id);

    public int updateApplication(String id ,ApplicationUpdateRequestDto dto);
}
