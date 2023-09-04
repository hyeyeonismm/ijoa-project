package com.example.ijoa.Controller;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
import com.example.ijoa.Dto.MyPageDto;
import com.example.ijoa.Response.CommonResponse;
import com.example.ijoa.Response.ResponseService;
import com.example.ijoa.Response.SingleResponse;
import com.example.ijoa.Service.ApplierService;
import com.example.ijoa.Service.ClientService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommonController {

    private ResponseService responseService;
    private ClientService clientService;
    private ApplierService applierService;
    public CommonController(ClientService clientService, ApplierService applierService , ResponseService responseService){
        this.clientService = clientService;
        this.applierService = applierService;
        this.responseService = responseService;
    }

    @PostMapping("/IJOA/join")
    public CommonResponse join(@RequestBody JoinDto dto){
        System.out.println(dto.getName());
        int result = 0;
        if(dto.getPosition().equals("client")) result = clientService.join(dto);
        else result = applierService.join(dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true, "회원가입 성공");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "회원가입 실패");
            return commonResponse;
        }
    }

    @GetMapping("/IJOA/login")
    public CommonResponse login(HttpServletRequest request, @RequestBody LoginDto dto){
        int result;
        if(dto.getPosition().equals("client")) {result = clientService.login(dto);}
        else result = applierService.login(dto);
        if(result==1) {
            HttpSession session = request.getSession();
            session.setAttribute("id",dto.getId());
            session.setAttribute("position",dto.getPosition());
            System.out.println(session.getAttribute("position"));
            CommonResponse commonResponse = new CommonResponse(true, "로그인 성공");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "로그인 실패");
            return commonResponse;
        }
    }

    @GetMapping("/IJOA/logout")
    public CommonResponse logout(HttpServletRequest request){
        HttpSession session = request.getSession();
        Object user = session.getAttribute("id");
        CommonResponse commonResponse;
        if(user!=null) {
            session.invalidate();
            commonResponse = new CommonResponse(true, "로그아웃 성공");
        }else{
            commonResponse = new CommonResponse(true, "세션이 이미 비어있음");
        }
        return commonResponse;
    }

    @GetMapping("/IJOA/mypage")
    public SingleResponse<MyPageDto> mypage(HttpServletRequest request){
        MyPageDto dto = new MyPageDto();
        HttpSession session = request.getSession();
        String position = (String)session.getAttribute("position");
        String id = (String)session.getAttribute("id");
        if(position.equals("client")) {
            Client client = clientService.findById(id);
            dto.setName(client.getName());
            dto.setEmail(client.getEmail());
            dto.setNickname(client.getNickname());
            System.out.println(dto.getNickname()+","+dto.getEmail()+","+dto.getName());
        }else{
            Applier applier = applierService.findById(id);
            dto.setName(applier.getName());
            dto.setEmail(applier.getEmail());
            dto.setNickname(applier.getNickname());
            System.out.println(dto.getNickname()+","+dto.getEmail()+","+dto.getName());
        }
        return responseService.getSingleResponse(dto);
    }
}
