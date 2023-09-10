package com.example.ijoa.Controller;

import com.example.ijoa.Domain.Application;
import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Dto.*;
import com.example.ijoa.Repository.ApplierAuthRepository;
import com.example.ijoa.Response.CommonResponse;
import com.example.ijoa.Response.ResponseService;
import com.example.ijoa.Response.SingleResponse;
import com.example.ijoa.Service.ApplicationService;
import com.example.ijoa.Service.ApplierAuthService;
import com.example.ijoa.Service.ApplierService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
public class ApplierController {

    private ApplierAuthService applierAuthService;
    private ApplicationService applicationService;
    private ResponseService responseService;


    public ApplierController(ApplierAuthService applierAuthService, ApplicationService applicationService, ResponseService responseService) {
        this.applierAuthService = applierAuthService;
        this.applicationService = applicationService;
        this.responseService = responseService;
    }

    @PostMapping("/IJOA/auth/step1")
    public CommonResponse applierAuthStep1(HttpServletRequest request, @ModelAttribute ApplierAuthInfoRequestDto dto){

        int result = applierAuthService.uploadIdentificationCard(request,dto);

        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true,"신분증 등록 성공");
            return commonResponse;
        }
        else {
            CommonResponse commonResponse = new CommonResponse(false, "신분증 등록 실패");
            return commonResponse;
        }
    }

    @PostMapping("/IJOA/auth/step3")
    public CommonResponse applierAuthStep3(HttpServletRequest request, @ModelAttribute ApplierAuthAbilityRequestDto dto){

        int result = applierAuthService.uploadAuthAbility(request,dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true,"서류 등록 성공");
            return commonResponse;
        }
        else {
            CommonResponse commonResponse = new CommonResponse(false, "서류 등록 실패");
            return commonResponse;
        }


    }


    @PostMapping("/IJOA/applier/register")
    public CommonResponse registerApplication(HttpServletRequest request,@RequestBody ApplicationRequestDto dto){

        int result = applicationService.registerApplication(request,dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true,"지원서 등록 성공");
            return commonResponse;
        }
        else {
            CommonResponse commonResponse = new CommonResponse(false, "지원서 등록 실패");
            return commonResponse;
        }

    }

    @GetMapping("/IJOA/applier/mypage/application")
    public SingleResponse<ApplicationResponseDto> detailViewApplication(HttpServletRequest request){

        ApplicationResponseDto dto = new ApplicationResponseDto();
        HttpSession session = request.getSession();
        String id = (String)session.getAttribute("id");
        Application application = applicationService.findApplicationId(id);
        log.info("application={}",application);
        log.info("id={}",id);
        dto.setDay(application.getDay());
        dto.setTime(application.getTime());
        dto.setHopeAge(application.getHope_age());
        dto.setSex(application.getGender());
        dto.setCareTerm(application.getCare_term());
        dto.setRegion(application.getRegion());
        dto.setCareType(application.getCare_type());
        dto.setDescription(application.getDescription());
        dto.setContent(application.getContent());


        return responseService.getSingleResponse(dto);

    }

    @DeleteMapping("/IJOA/applier/mypage/application")
    public CommonResponse deleteApplication(HttpServletRequest request){
        HttpSession session = request.getSession();
        String id = (String)session.getAttribute("id");
        int result  = applicationService.deleteApplication(id);
        log.info("id={}",id);
        log.info("result={}",result);

        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true, "지원서 삭제 성공");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "지원서 삭제 실패");
            return commonResponse;
        }

    }

    @PutMapping("/IJOA/applier/mypage/application")
    public CommonResponse updateApplication(HttpServletRequest request, @RequestBody ApplicationUpdateRequestDto dto){
        HttpSession session = request.getSession();
        String id = (String)session.getAttribute("id");
        int result = applicationService.updateApplication(id,dto);
        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true, "지원서 수정 성공");
            return commonResponse;
        }else{
            CommonResponse commonResponse = new CommonResponse(false, "지원서 수정 실패");
            return commonResponse;
        }
    }


}
