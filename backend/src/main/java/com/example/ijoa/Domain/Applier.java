package com.example.ijoa.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.File;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Applier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int applier_id;
    private String name;
    private String id;
    private String pw;
    private String nickname;
    private String birth;
    private String email;
    private String gender;
    private String address;
    private String phone;
    private File image_url;
    private double avg_point;
    private int care_auth;
    @OneToMany(mappedBy = "applier")
    private List<Notice> notices;
    @OneToMany(mappedBy = "applier")
    private List<ChatRoom> chat_rooms;
    @JsonIgnore
    @OneToMany(mappedBy = "applier")
    private List<Contract> contracts;
    @OneToOne
    private Appliecation appliecation;
    @OneToOne
    private Review review;
    @OneToOne
    private ApplierAuth applier_auth;
}
