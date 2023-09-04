package com.example.ijoa.Controller;

import com.example.ijoa.Domain.KidCare;
import com.example.ijoa.Dto.ClientRegisterDto;
import com.example.ijoa.Response.CommonResponse;
import com.example.ijoa.Service.ClientService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ClientController {
    private ClientService clientService;

    public ClientController(ClientService clientService){
        this.clientService = clientService;
    }

    @PostMapping("/IJOA/client/register")
    public CommonResponse register(HttpServletRequest request,@RequestBody ClientRegisterDto dto){
        int result = clientService.register(request, dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true,"글 등록 성공");
            return commonResponse;
        }
        else {
            CommonResponse commonResponse = new CommonResponse(false, "글 등록 실패");
            return commonResponse;
        }
    }
}
