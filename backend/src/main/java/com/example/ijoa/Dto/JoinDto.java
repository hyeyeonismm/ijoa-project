package com.example.ijoa.Dto;

import lombok.Getter;
import lombok.Setter;

import java.io.File;
import java.util.Date;

@Getter
@Setter
public class JoinDto {
    private String position;
    private String name;
    private String id;
    private String pw;
    private String pw_check;
    private String nickname;
    private Date birth;
    private String address;
    private File image_url;
    private String gender;
    private String phone;
    private String email;
}
