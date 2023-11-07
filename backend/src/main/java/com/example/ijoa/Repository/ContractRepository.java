package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Contract;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Dto.ContractDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContractRepository extends JpaRepository<Contract, Integer> {

    public Applier findById(String id);
    public int register(ContractDto dto);

    public int update(int contract_id, ContractDto dto);

    public int update_payment(int contract_id);

    public List<Contract> findClientPayList(Client client);
    public List<Contract> findApplierPayList(Applier applier);

    public List<Contract> findClientNonPayList(Client client);
    public List<Contract> findApplierNonPayList(Applier applier);


    public int findApplierId(String id);

    public List<Contract> contractList(int id);

    public Contract findContract(int id);

    @Query("SELECT contract FROM Contract contract WHERE contract.applier.applier_id = :id")
    Page<Contract> contractList(@Param("id") int id, Pageable pageable);




}
