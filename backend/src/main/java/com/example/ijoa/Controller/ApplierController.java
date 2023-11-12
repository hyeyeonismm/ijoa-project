package com.example.ijoa.Controller;

import com.example.ijoa.Domain.Application;
import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Contract;
import com.example.ijoa.Domain.KidCare;
import com.example.ijoa.Dto.*;
import com.example.ijoa.Repository.ApplierAuthRepository;
import com.example.ijoa.Response.CommonResponse;
import com.example.ijoa.Response.ListResponse;
import com.example.ijoa.Response.ResponseService;
import com.example.ijoa.Response.SingleResponse;
import com.example.ijoa.Service.*;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
public class ApplierController {

    private ApplierAuthService applierAuthService;
    private ApplierService applierService;
    private ApplicationService applicationService;
    private ResponseService responseService;
    private ContractService contractService;
    private KidCareService kidCareService;


    public ApplierController(ApplierAuthService applierAuthService, ApplierService applierService,
                             ApplicationService applicationService, ResponseService responseService,
                             ContractService contractService, KidCareService kidCareService) {
        this.applierAuthService = applierAuthService;
        this.applierService = applierService;
        this.applicationService = applicationService;
        this.responseService = responseService;
        this.contractService = contractService;
        this.kidCareService = kidCareService;
    }

    @PostMapping("/IJOA/auth/step1")
    public CommonResponse applierAuthStep1(HttpServletRequest request, @ModelAttribute ApplierAuthInfoRequestDto dto){

        int result = applierAuthService.uploadIdentificationCard(request,dto);

        if(result==1) {
            CommonResponse commonResponse = new CommonResponse(true,"신분증 등록 성공");
            return commonResponse;
        }
        else if(result == -1) { // 이름 불일치의 경우, -1을 반환하도록 서비스 메서드를 수정해야 합니다.
            CommonResponse commonResponse = new CommonResponse(false, "이름이 일치하지 않습니다.");
            return commonResponse;
        } else if (result == -2) {
            return new CommonResponse(false, "신분증이 이미 등록되어 있습니다.");
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
            CommonResponse commonResponse = new CommonResponse(true,"보건증 등록 성공");
            return commonResponse;
        }
        else {
            CommonResponse commonResponse = new CommonResponse(false, "보건증 등록 실패");
            return commonResponse;
        }


    }

    @PostMapping("/IJOA/auth/step4")
    public CommonResponse applierDocumentStep4(HttpServletRequest request, @ModelAttribute ApplierDocumentDto dto){
        int result = applierAuthService.uploadApplierDocument(request,dto);
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
        dto.setSi(application.getSi());
        dto.setGu(application.getGu());
        dto.setDong(application.getDong());
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

    @GetMapping("IJOA/applier/mypage/carehistory")
    public ResponseEntity<ListResponse<ContractDto>> findAllContract(
            HttpServletRequest request,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        HttpSession session = request.getSession();
        String id = (String) session.getAttribute("id");

        Pageable pageable = PageRequest.of(page, size);
        Page<ContractDto> contractPage = contractService.findAllContract(id, pageable);

        ListResponse<ContractDto> response;
        if (contractPage.hasContent()) {
            response = new ListResponse<>(true, "돌봄 내역을 성공적으로 가져왔습니다.");
            response.setDataList(contractPage.getContent());
        } else {
            response = new ListResponse<>(false, "돌봄 내역이 없습니다.");
        }

        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping("IJOA/applier/mypage/carehistory/contract")
    public SingleResponse<ContractDto> findContract(HttpServletRequest request, @RequestParam int contract_id){

        Contract contract = contractService.findContract(contract_id);
        HttpSession session = request.getSession();
        String id = (String) session.getAttribute("id");
        Applier applier = applierService.findById(id);

        ContractDto dto  = new ContractDto();
        dto.setApplier(applier);
        dto.setCost(contract.getCost());
        dto.setStart_date(contract.getStart_date());
        dto.setStart_time(contract.getStart_time());
        dto.setEnd_date(contract.getEnd_date());
        dto.setEnd_time(contract.getEnd_time());
        dto.setPlace(contract.getPlace());
        dto.setRegion(contract.getRegion());
        dto.setPayment_state(contract.getPayment_state());


        SingleResponse<ContractDto> singleResponse;
        if(contract.getContract_id()!=0) {
            singleResponse = new SingleResponse<>(true,"확인서 조회 성공");
        }
        else{
            singleResponse = new SingleResponse<>(false,"존재하지 않는 확인서입니다.");
        }
        singleResponse.setData(dto);

        return singleResponse;
    }

    @GetMapping("/IJOA/applier/kidCareSearch")
    public ListResponse<KidCare> kidCare_search(@RequestBody KidCareSearchDto dto) {
        List<KidCare> result = kidCareService.search(dto);
        ListResponse<KidCare> listResponse;
        if(result!=null){
            listResponse = new ListResponse<>(true,"게시글 검색 성공");
            listResponse.setDataList(result);
        }else{
            listResponse = new ListResponse<>(false,"게시글 검색 실패");
        }
        return listResponse;
    }







}
