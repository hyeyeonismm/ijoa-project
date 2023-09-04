package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplierRepository extends JpaRepository<Applier, Integer> {

    public int join(JoinDto dto);

    public int login(LoginDto dto);
    public Applier findById(String id);
}
