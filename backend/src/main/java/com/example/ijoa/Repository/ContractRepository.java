package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Contract;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepository extends JpaRepository<Contract,Integer> {

    public Applier findById(String id);


}
