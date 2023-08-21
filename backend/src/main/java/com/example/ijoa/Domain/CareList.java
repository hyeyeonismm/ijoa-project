package com.example.ijoa.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class CareList {
    // 이상함.. 테이블 구조를 다시 확인.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int list_id;
    private String state;
    @OneToMany(mappedBy = "care_list")
    private List<KidCare> kid_cares;

}
