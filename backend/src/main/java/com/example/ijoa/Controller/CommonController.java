package com.example.ijoa.Controller;

import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
import com.example.ijoa.Response.CommonResponse;
import com.example.ijoa.Service.ApplierService;
import com.example.ijoa.Service.ClientService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommonController {
    private ClientService clientService;
    private ApplierService applierService;
    public CommonController(ClientService clientService, ApplierService applierService){
        this.clientService = clientService;
        this.applierService = applierService;
    }

    @PostMapping("/IJOA/join")
    public CommonResponse join(@RequestBody JoinDto dto){
        System.out.println(dto.getName());
        int result = 0;
        if(dto.getPosition().equals("client")) result = clientService.join(dto);
        else result = applierService.join(dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true, "SUCCESS");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "FAIL");
            return commonResponse;
        }
    }

    @GetMapping("/IJOA/login")
    public CommonResponse login(@RequestBody LoginDto dto){
        int result;
        if(dto.getPosition().equals("client")) {result = clientService.login(dto);}
        else result = applierService.login(dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true, "SUCCESS");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "FAIL");
            return commonResponse;
        }

    }
}
