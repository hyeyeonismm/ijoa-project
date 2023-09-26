package com.example.ijoa.Domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.File;
import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int client_id;
    private String name;
    private String id;
    private String pw;
    private String nickname;
    private String birth;
    private String email;
    private String address;
    private File image_url;
    private String gender;
    private String phone;
    @OneToMany(mappedBy = "client")
    private List<KidCare> kid_cares;
    @OneToMany(mappedBy = "client")
    private List<Notice> notices;
    @JsonIgnore
    @OneToMany(mappedBy = "client")
    private List<Contract> contracts;
}
