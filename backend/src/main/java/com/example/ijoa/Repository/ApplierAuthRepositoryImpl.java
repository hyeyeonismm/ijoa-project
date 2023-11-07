package com.example.ijoa.Repository;


import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.ApplierAuth;
import com.example.ijoa.Dto.ApplierAuthAbilityRequestDto;
import com.example.ijoa.Dto.ApplierAuthInfoRequestDto;
import com.example.ijoa.Dto.ApplierDocumentDto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Repository
public class ApplierAuthRepositoryImpl implements ApplierAuthRepository {

    private EntityManager em;

    public ApplierAuthRepositoryImpl(EntityManager em) {
        this.em = em;
    }

    @Override
    public Applier findById(String id) {
        String sql = "select applier from Applier applier where id = :id";
        TypedQuery<Applier> query = em.createQuery(sql, Applier.class);
        query.setParameter("id", id);
        List<Applier> list = query.getResultList();
        for (Applier entity : list) {
            return entity; //첫번째 entity 바로 리턴. 어차피 찾는 유저는 하나일테니. (가입할 때 id 중복체크를 하기 때문)
        }
        return null;
    }

    // @Override
    // public int uploadIdentificationCard(HttpServletRequest request, ApplierAuthInfoRequestDto dto) {
    //     HttpSession session = request.getSession();
    //     String id = (String)session.getAttribute("id");
    //     Applier applier = findById(id);
    //     ApplierAuth applierAuth = new ApplierAuth();
    //     applierAuth.setApplier(applier);
    //     applierAuth.setName(dto.getName());
    //     applierAuth.setIssueDate(dto.getIssueDate());
    //     applierAuth.setIdNumber(dto.getIdNumber());
    //
    //     em.persist(applierAuth);
    //     applier.setApplier_auth(applierAuth);
    //     em.merge(applier);
    //     if(applierAuth.getAuth_id()>0) return 1;
    //     return 0;
    // }
    @Override
    public int uploadIdentificationCard(HttpServletRequest request, ApplierAuthInfoRequestDto dto) {
        HttpSession session = request.getSession();
        String id = (String)session.getAttribute("id");
        Applier applier = findById(id);

        // 로그인된 사용자의 이름과 전달된 DTO의 이름이 일치하는지 확인
        if (!applier.getName().equals(dto.getName())) {
            return -1;  // 이름이 일치하지 않으므로 -1 반환
        }
        if (applier.getApplier_auth() != null) {
            return -2;  // 신분증이 이미 등록되어 있으므로 -2 반환
        }

        ApplierAuth applierAuth = new ApplierAuth();
        applierAuth.setApplier(applier);
        applierAuth.setName(dto.getName());
        applierAuth.setIssueDate(dto.getIssueDate());
        applierAuth.setIdNumber(dto.getIdNumber());

        em.persist(applierAuth);
        applier.setApplier_auth(applierAuth);
        em.merge(applier);
        if(applierAuth.getAuth_id()>0) return 1;
        return 0;
    }


    @Override
    public int uploadAuthAbility(HttpServletRequest request, ApplierAuthAbilityRequestDto dto) {
        HttpSession session = request.getSession();
        String id = (String)session.getAttribute("id");
        Applier applier = findById(id);

        ApplierAuth applierAuthRecord = em.find(ApplierAuth.class, applier.getApplier_id());
        applierAuthRecord.setStartDate(dto.getStartDate());
        applierAuthRecord.setEndDate(dto.getEndDate());
        MultipartFile uploadFile = dto.getApplierAbilityFile();
        String orgFileName = uploadFile.getOriginalFilename();
        String realPath = request.getServletContext().getRealPath("/resources/upload");
        String filePath = realPath + File.separator;


        File upload = new File(filePath);
        if(!upload.exists()){
            upload.mkdir();
        }
        String saveFileName =
                System.currentTimeMillis()+orgFileName;
        applierAuthRecord.setApplierAbilityFile(saveFileName);

        em.merge(applierAuthRecord);
        if(applierAuthRecord.getAuth_id()>0) return 1;


        return 0;
    }

    @Override
    public int uploadApplierDocument(HttpServletRequest request, ApplierDocumentDto dto) {
        HttpSession session = request.getSession();
        String id = (String)session.getAttribute("id");
        Applier applier = findById(id);

        ApplierAuth applierAuthRecord = em.find(ApplierAuth.class, applier.getApplier_id());
        MultipartFile uploadFile = dto.getApplierDocument();
        String orgFileName = uploadFile.getOriginalFilename();
        String realPath = request.getServletContext().getRealPath("/resources/upload");
        String filePath = realPath + File.separator;


        File upload = new File(filePath);
        if(!upload.exists()){
            upload.mkdir();
        }
        String saveFileName =
                System.currentTimeMillis()+orgFileName;
        applierAuthRecord.setExtraDocument(saveFileName);

        em.merge(applierAuthRecord);
        if(applierAuthRecord.getAuth_id()>0) return 1;


        return 0;
    }


    @Override
    public void flush() {

    }

    @Override
    public <S extends ApplierAuth> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends ApplierAuth> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<ApplierAuth> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public ApplierAuth getOne(Integer integer) {
        return null;
    }

    @Override
    public ApplierAuth getById(Integer integer) {
        return null;
    }

    @Override
    public ApplierAuth getReferenceById(Integer integer) {
        return null;
    }

    @Override
    public <S extends ApplierAuth> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends ApplierAuth> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends ApplierAuth> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends ApplierAuth> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends ApplierAuth> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends ApplierAuth> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends ApplierAuth, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends ApplierAuth> S save(S entity) {
        return null;
    }

    @Override
    public <S extends ApplierAuth> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<ApplierAuth> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public List<ApplierAuth> findAll() {
        return null;
    }

    @Override
    public List<ApplierAuth> findAllById(Iterable<Integer> integers) {
        return null;
    }

    @Override
    public long count() {
        return 0;
    }

    @Override
    public void deleteById(Integer integer) {

    }

    @Override
    public void delete(ApplierAuth entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends ApplierAuth> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<ApplierAuth> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<ApplierAuth> findAll(Pageable pageable) {
        return null;
    }
}
