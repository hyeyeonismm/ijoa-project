package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Account;
import com.example.ijoa.Dto.AccountRequestDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


public interface AccountRepository extends JpaRepository<Account, Integer> {

    public int register(String user_type, String user_id, AccountRequestDto dto);
}
