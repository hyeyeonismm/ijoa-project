package com.example.ijoa.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Contract {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int contract_id;
    @OneToOne
    private KidCare kid_care;
    @ManyToOne
    private Applier applier;
}
