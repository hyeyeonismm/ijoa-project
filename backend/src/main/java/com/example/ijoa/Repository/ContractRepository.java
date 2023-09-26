package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Dto.ContractDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContractRepository extends JpaRepository<Contract, Integer> {

    public Applier findById(String id);
    public int register(ContractDto dto);

    public int update(int contract_id, ContractDto dto);

    public int update_payment(int contract_id);

    public List<Contract> findClientPayList(Client client);
    public List<Contract> findApplierPayList(Applier applier);

    public List<Contract> findClientNonPayList(Client client);
    public List<Contract> findApplierNonPayList(Applier applier);



}
