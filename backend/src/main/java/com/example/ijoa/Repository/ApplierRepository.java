package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Dto.*;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ApplierRepository extends JpaRepository<Applier, Integer> {

    public int join(JoinDto dto);

    public int login(LoginDto dto);
    public Applier findById(String id);


}
