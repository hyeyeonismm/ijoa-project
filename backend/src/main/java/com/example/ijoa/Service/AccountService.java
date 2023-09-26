package com.example.ijoa.Service;

import com.example.ijoa.Dto.AccountRequestDto;
import com.example.ijoa.Repository.AccountRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;

    public int register(String user_type, String user_id, AccountRequestDto dto) {
        return accountRepository.register(user_type, user_id, dto);
    }
}
