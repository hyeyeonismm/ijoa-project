package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.ApplierAuth;
import com.example.ijoa.Dto.ApplierAuthAbilityRequestDto;
import com.example.ijoa.Dto.ApplierAuthInfoRequestDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplierAuthRepository extends JpaRepository<ApplierAuth,Integer> {


    public Applier findById(String id);

    public int uploadIdentificationCard(HttpServletRequest request, ApplierAuthInfoRequestDto dto);

    public int uploadAuthAbility(HttpServletRequest request, ApplierAuthAbilityRequestDto dto);

}

