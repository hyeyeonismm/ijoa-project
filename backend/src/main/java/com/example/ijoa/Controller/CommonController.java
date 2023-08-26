package com.example.ijoa.Controller;

import com.example.ijoa.Dto.LoginDto;
import com.example.ijoa.Service.CommonService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import static com.example.ijoa.Response.Response.failure;
import static com.example.ijoa.Response.Response.success;

public class CommonController {
    private CommonService commonService;

    @GetMapping("/IJOA/login")
    public ResponseEntity login(@RequestBody LoginDto dto){
        boolean result = commonService.login(dto);
        if(result){
            return new ResponseEntity(success(), HttpStatus.OK);
        }else{
            return new ResponseEntity(failure(),HttpStatus.BAD_REQUEST);
        }
    }
}
