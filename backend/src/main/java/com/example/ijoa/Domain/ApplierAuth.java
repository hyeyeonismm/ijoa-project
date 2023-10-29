package com.example.ijoa.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class ApplierAuth {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int auth_id;
    @OneToOne
    private Applier applier;
    private String license;
    private String applierAbilityFile;
    private int approve;
}
