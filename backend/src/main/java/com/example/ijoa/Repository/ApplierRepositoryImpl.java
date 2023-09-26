package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.TypedQuery;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Repository
public class ApplierRepositoryImpl implements ApplierRepository{

    private EntityManager em;

    public ApplierRepositoryImpl(EntityManager em) {this.em = em;}

    @Override
    public int join(JoinDto dto){
        Applier applier = new Applier();
        applier.setName(dto.getName());
        applier.setId(dto.getId());
        applier.setPw(dto.getPw());
        applier.setNickname(dto.getNickname());
        applier.setBirth(dto.getBirth());
        applier.setEmail(dto.getEmail());
        applier.setGender(dto.getGender());
        applier.setAddress(dto.getAddress());
        applier.setPhone(dto.getPhone());
        applier.setImage_url(dto.getImage_url());

        em.persist(applier);
        if(findById(dto.getId())!=null) return 1;
        return 0;
    }

    @Override
    public int login(LoginDto dto){
        String sql = "select applier from Applier applier where id = :id and pw = :pw";
        TypedQuery<Applier> query = em.createQuery(sql, Applier.class);
        query.setParameter("id", dto.getId());
        query.setParameter("pw", dto.getPw());
        List<Applier> list = query.getResultList();
        if(list.size()>0) return 1;
        return 0;
    }

    public Applier findById(String id){
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
    public void flush() {

    }

    @Override
    public <S extends Applier> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Applier> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<Applier> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Applier getOne(Integer integer) {
        return null;
    }

    @Override
    public Applier getById(Integer integer) {
        return null;
    }

    @Override
    public Applier getReferenceById(Integer integer) {
        return null;
    }

    @Override
    public <S extends Applier> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Applier> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Applier> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Applier> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Applier> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Applier> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Applier, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends Applier> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Applier> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Applier> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public List<Applier> findAll() {
        return null;
    }

    @Override
    public List<Applier> findAllById(Iterable<Integer> integers) {
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
    public void delete(Applier entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends Applier> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<Applier> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Applier> findAll(Pageable pageable) {
        return null;
    }
}
