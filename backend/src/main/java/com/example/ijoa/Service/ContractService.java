package com.example.ijoa.Service;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Domain.Contract;
import com.example.ijoa.Dto.ContractDto;
import com.example.ijoa.Repository.ContractRepository;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Slf4j
@Service
@Transactional
public class ContractService {

    @Autowired
    ContractRepository contractRepository;

//    public List<Contract> findAllContract(String id){
//        int applier_id = contractRepository.findApplierId(id);
//        log.info("값 테스트");
//        log.info("applier_id={}", applier_id);
//
//        return contractRepository.contractList(applier_id);
//    }

    public Contract findContract(int id){

        return contractRepository.findContract(id);
    }

    public Page<ContractDto> findAllContract(String id, Pageable pageable) {
        int applier_id = contractRepository.findApplierId(id);
        Page<Contract> contractPage = contractRepository.contractList(applier_id, pageable);

        Page<ContractDto> contractDtoPage = contractPage.map(this::mapToDto);

        return contractDtoPage;
    }

    private ContractDto mapToDto(Contract contract) {
        ContractDto dto = new ContractDto();
        dto.setContract_id(contract.getContract_id());
        dto.setApplier(contract.getApplier()); // 예시로 applier 이름 설정
        dto.setStart_date(contract.getStart_date());
        dto.setEnd_date(contract.getEnd_date());
        dto.setRegion(contract.getRegion());
        dto.setCare_type(contract.getCare_type());
        dto.setPayment_state(contract.getPayment_state());

        return dto;
    }
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
