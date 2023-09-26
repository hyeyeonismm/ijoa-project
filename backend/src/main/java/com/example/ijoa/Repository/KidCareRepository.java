package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Client;
import com.example.ijoa.Domain.KidCare;
import com.example.ijoa.Dto.ClientRegisterDto;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KidCareRepository extends JpaRepository<KidCare, Integer> {

    public int register(HttpServletRequest request, ClientRegisterDto dto);

    public Client findById(String id);
    public KidCare detailView(int post_id);

    public int update(int post_id, ClientRegisterDto dto);

    public int delete(int post_id);
    public KidCare findByCare_id(int post_id);
}
