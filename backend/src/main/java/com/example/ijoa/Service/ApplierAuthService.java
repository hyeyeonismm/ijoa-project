package com.example.ijoa.Service;

import com.example.ijoa.Dto.ApplierAuthAbilityRequestDto;
import com.example.ijoa.Dto.ApplierAuthInfoRequestDto;
import com.example.ijoa.Dto.ApplierDocumentDto;
import com.example.ijoa.Repository.ApplierAuthRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ApplierAuthService {

    @Autowired
    private ApplierAuthRepository applierAuthRepository;

    public int uploadIdentificationCard(HttpServletRequest request, ApplierAuthInfoRequestDto dto){
        return applierAuthRepository.uploadIdentificationCard(request,dto);
    }

    public int uploadAuthAbility(HttpServletRequest request, ApplierAuthAbilityRequestDto dto){
        return applierAuthRepository.uploadAuthAbility(request,dto);
    }

    public int uploadApplierDocument(HttpServletRequest request, ApplierDocumentDto dto){
        return applierAuthRepository.uploadApplierDocument(request,dto);
    }
}
