package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Contract;
import com.example.ijoa.Dto.ContractDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepository extends JpaRepository<Contract, Integer> {

    public int register(ContractDto dto);
}
