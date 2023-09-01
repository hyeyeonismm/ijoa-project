package com.example.ijoa.Controller;

import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Response.CommonResponse;
import com.example.ijoa.Service.ClientService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController {
    private ClientService clientService;
    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @PostMapping("/IJOA/join")
    public CommonResponse join(@RequestBody JoinDto dto){
        int result = clientService.join(dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true, "SUCCESS");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "FAIL");
            return commonResponse;
        }

    }
}
