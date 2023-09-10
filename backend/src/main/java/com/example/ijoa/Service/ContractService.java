package com.example.ijoa.Service;

import com.example.ijoa.Dto.ContractDto;
import com.example.ijoa.Repository.ContractRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;

    public int register(ContractDto dto) {return contractRepository.register(dto);}
}
