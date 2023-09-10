package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Application;
import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Dto.ApplicationRequestDto;
import com.example.ijoa.Dto.ApplicationUpdateRequestDto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Slf4j
@Repository
public class ApplicationRepositoryImpl implements ApplicationRepository{


    private EntityManager em;

    public ApplicationRepositoryImpl(EntityManager em) {
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

    @Override
    public int registerApplication(HttpServletRequest request, ApplicationRequestDto dto) {
        HttpSession session = request.getSession();
        String id = (String) session.getAttribute("id");
        Applier applier = findById(id);
        Application application = new Application();
        application.setApplier(applier);
        application.setDay(dto.getDay());
        application.setTime(dto.getTime());
        application.setHope_age(dto.getHopeAge());
        application.setGender(dto.getSex());
        application.setCare_term(dto.getCareTerm());
        application.setRegion(dto.getRegion());
        application.setCare_type(dto.getCareType());
        application.setDescription(dto.getDescription());
        application.setContent(dto.getContent());

        em.persist(application);
        applier.setApplication(application);
        em.merge(applier);
        if(application.getApplication_id()>0)
            return 1;

        return 0;
    }

    @Override
    public Application findApplicationId(String id) {
        String sql = "select application from Application application where application.applier.id = :id";
        TypedQuery<Application> query = em.createQuery(sql, Application.class);
        query.setParameter("id", id);

        List<Application> list = query.getResultList();
        for(Application entity : list) {
            return entity; //첫번째 entity 바로 리턴. 어차피 찾는 유저는 하나일테니. (가입할 때 id 중복체크를 하기 때문)
        }
        return null;
    }

    @Transactional
    @Override
    public int deleteApplication(String id) {
        String sql = "DELETE FROM Application application WHERE application.applier.applier_id " +
                " = (SELECT applier_id FROM Applier applier WHERE applier.id = :id)";
        Applier applier = new Applier();
        applier.setApplication(null);
        Query query = em.createQuery(sql);
        em.merge(applier);
        query.setParameter("id",id);
        query.executeUpdate();
        Application application = findApplicationId(id);


        if(application==null)
            return 1;
        return 0;

    }

    @Override
    public int updateApplication(String id, ApplicationUpdateRequestDto dto) {
        Application application = findApplicationId(id);
        application.setDay(dto.getDay());
        application.setTime(dto.getTime());
        application.setHope_age(dto.getHopeAge());
        application.setGender(dto.getSex());
        application.setCare_term(dto.getCareTerm());
        application.setRegion(dto.getRegion());
        application.setCare_type(dto.getCareType());
        application.setDescription(dto.getDescription());
        application.setContent(dto.getContent());

        em.merge(application);

        return 1;
    }


    @Override
    public void flush() {

    }

    @Override
    public <S extends Application> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Application> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<Application> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Application getOne(Integer integer) {
        return null;
    }

    @Override
    public Application getById(Integer integer) {
        return null;
    }

    @Override
    public Application getReferenceById(Integer integer) {
        return null;
    }

    @Override
    public <S extends Application> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Application> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Application> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Application> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Application> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Application> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Application, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends Application> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Application> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Application> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public List<Application> findAll() {
        return null;
    }

    @Override
    public List<Application> findAllById(Iterable<Integer> integers) {
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
    public void delete(Application entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends Application> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<Application> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Application> findAll(Pageable pageable) {
        return null;
    }
}