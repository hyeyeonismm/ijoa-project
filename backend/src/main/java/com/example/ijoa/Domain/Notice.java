package com.example.ijoa.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Notice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int notice_id;
    @ManyToOne
    private Client client;
    @ManyToOne
    private Applier applier;
    private String content;
}
