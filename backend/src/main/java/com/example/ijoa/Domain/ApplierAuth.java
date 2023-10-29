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
    private String name;
    private String issueDate;
    private String idNumber;
    private String applierAbilityFile;
    private String extraDocument;
    private String startDate;
    private String endDate;
    private int approve;
}
