package com.example.ijoa.Service;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Domain.Contract;
import com.example.ijoa.Dto.ContractDto;
import com.example.ijoa.Repository.ContractRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
public class ContractService {

    @Autowired
    private ContractRepository contractRepository;

    public int register(ContractDto dto) {return contractRepository.register(dto);}

    public int update(int contract_id, ContractDto dto) {return contractRepository.update(contract_id, dto);}

    public int update_payment(int contract_id) {return contractRepository.update_payment(contract_id);}

    public List<Contract> findClientPayList(Client client) {
        return contractRepository.findClientPayList(client);
    }

    public List<Contract> findClientNonPayList(Client client) {
        return contractRepository.findClientNonPayList(client);
    }

    public List<Contract> findApplierPayList(Applier applier) {
        return contractRepository.findApplierPayList(applier);
    }

    public List<Contract> findApplierNonPayList(Applier applier) {
        return contractRepository.findApplierNonPayList(applier);
    }

}
