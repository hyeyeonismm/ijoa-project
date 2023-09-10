package com.example.ijoa.Controller;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Domain.KidCare;
import com.example.ijoa.Dto.AccountRequestDto;
import com.example.ijoa.Dto.ClientRegisterDto;
import com.example.ijoa.Dto.ContractDto;
import com.example.ijoa.Response.CommonResponse;
import com.example.ijoa.Response.SingleResponse;
import com.example.ijoa.Service.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.web.bind.annotation.*;

@RestController
public class ClientController {
    private ClientService clientService;
    private KidCareService kidCareService;
    private AccountService accountService;
    private ContractService contractService;
    private ApplierService applierService;

    public ClientController(ClientService clientService, KidCareService kidCareService,
                            AccountService accountService, ContractService contractService,
                            ApplierService applierService){
        this.clientService = clientService;
        this.kidCareService = kidCareService;
        this.accountService = accountService;
        this.contractService = contractService;
        this.applierService = applierService;
    }

    @PostMapping("/IJOA/client/register")
    public CommonResponse register(HttpServletRequest request,@RequestBody ClientRegisterDto dto){
        int result = kidCareService.register(request, dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true,"글 등록 성공");
            return commonResponse;
        }
        else {
            CommonResponse commonResponse = new CommonResponse(false, "글 등록 실패");
            return commonResponse;
        }
    }

    @GetMapping("/IJOA/client/mypage/carehistory")
    public SingleResponse<KidCare> detailView(@RequestParam int post_id){
        System.out.println("Controller 들어옴");
        System.out.println(post_id);
        KidCare value = kidCareService.detailView(post_id);
        SingleResponse<KidCare> singleResponse;
        if(value!=null)
            singleResponse = new SingleResponse<>(true,"게시글 상세보기 출력 성공");
        else
            singleResponse = new SingleResponse<>(false,"게시글 상세보기 출력 실패");
        singleResponse.setData(value);
        return singleResponse;
    }

    @PutMapping("/IJOA/client/mypage/carehistory")
    public CommonResponse editPost(@RequestParam int post_id, @RequestBody ClientRegisterDto dto){
        int result = kidCareService.update(post_id, dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true, "게시글 수정 성공");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "게시글 수정 실패");
            return commonResponse;
        }
    }
    
    @DeleteMapping("/IJOA/client/mypage/carehistory")
    public CommonResponse delete(@RequestParam int post_id){
        int result = kidCareService.delete(post_id);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true, "게시글 삭제 성공");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "게시글 삭제 실패");
            return commonResponse;
        }
    }

    @PostMapping("/IJOA/client/mypage/payment")
    public CommonResponse registerAccount(HttpServletRequest request, @RequestBody AccountRequestDto dto){
        HttpSession session = request.getSession();
        String user_type = (String)session.getAttribute("position");
        String user_id = (String)session.getAttribute("id");
        int result = accountService.register(user_type, user_id, dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true, "계좌 등록 성공");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "계좌 등록 실패");
            return commonResponse;
        }
    }

    @PostMapping("/IJOA/contract")
    public CommonResponse registerContract(HttpServletRequest request, @RequestParam String applier_id,
                                           @RequestBody ContractDto dto){
        HttpSession session = request.getSession();
        String client_id = (String)session.getAttribute("id");
        Client client = clientService.findById(client_id);
        Applier applier = applierService.findById(applier_id);
        dto.setClient(client);
        dto.setApplier(applier);
        int result = contractService.register(dto);
        if(result==1){
            CommonResponse commonResponse = new CommonResponse(true, "확인서 등록 성공");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "확인서 등록 실패");
            return commonResponse;
        }
    }
}
