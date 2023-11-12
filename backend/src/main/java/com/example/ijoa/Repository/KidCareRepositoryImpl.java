package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Application;
import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Domain.Client;
import com.example.ijoa.Domain.KidCare;
import com.example.ijoa.Dto.ClientRegisterDto;
import com.example.ijoa.Dto.KidCareSearchDto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.repository.query.FluentQuery;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Repository
public class KidCareRepositoryImpl implements KidCareRepository{

    private EntityManager em;

    public KidCareRepositoryImpl(EntityManager em) {
        this.em = em;
    }

    @Override
    public int register(HttpServletRequest request, ClientRegisterDto dto){
        String[] splitRegion = new String[3];
        splitRegion = dto.getRegion().split(" ");
        HttpSession session = request.getSession();
        String id = (String)session.getAttribute("id");
        Client client = findById(id);
        KidCare kidCare = new KidCare();
        kidCare.setClient(client);
        kidCare.setTitle(dto.getTitle());
        kidCare.setDate(dto.getDate());
        kidCare.setPlace(dto.getPlace());
        kidCare.setState("진행전");
        kidCare.setTime(dto.getTime());
        kidCare.setCost(dto.getCost());
        kidCare.setContent(dto.getContent());
        kidCare.setRegion(dto.getRegion());
        kidCare.setCare_term(dto.getCare_term());
        kidCare.setSi(splitRegion[0]);
        kidCare.setGu(splitRegion[1]);
        kidCare.setDong(splitRegion[2]);
        kidCare.setCare_type(dto.getCare_type());

        em.persist(kidCare);
        kidCare.getCare_id();
        if(kidCare.getCare_id()>0) return 1;
        return 0;

    }

    @Override
    public Client findById(String id){
        String sql = "select client from Client client where id = :id";
        TypedQuery<Client> query = em.createQuery(sql, Client.class);
        query.setParameter("id", id);
        List<Client> list = query.getResultList();
        for (Client entity : list) {
            return entity; //첫번째 entity 바로 리턴. 어차피 찾는 유저는 하나일테니. (가입할 때 id 중복체크를 하기 때문)
        }
        return null;
    }


    @Override
    public KidCare detailView(int post_id){
        String sql = "select kidCare from KidCare kidCare where care_id = :care_id";
        TypedQuery<KidCare> query = em.createQuery(sql, KidCare.class);
        query.setParameter("care_id", post_id);
        List<KidCare> list = query.getResultList();
        for (KidCare entity : list) {
            return entity;
        }
        return null;
    }

    @Override
    public int update(int post_id, ClientRegisterDto dto){
        String[] splitRegion = new String[3];
        splitRegion = dto.getRegion().split(" ");
        KidCare kidCare = em.find(KidCare.class, post_id);
        kidCare.setTitle(dto.getTitle());
        kidCare.setDate(dto.getDate());
        kidCare.setPlace(dto.getPlace());
        kidCare.setState("진행전");
        kidCare.setTime(dto.getTime());
        kidCare.setCost(dto.getCost());
        kidCare.setContent(dto.getContent());
        kidCare.setSi(splitRegion[0]);
        kidCare.setGu(splitRegion[1]);
        kidCare.setDong(splitRegion[2]);
        kidCare.setRegion(dto.getRegion());
        kidCare.setCare_type(dto.getCare_type());
        return 1;
    }

    @Override
    public KidCare findByCare_id(int post_id){
        String sql = "select kidCare from KidCare kidCare where care_id = :care_id";
        TypedQuery<KidCare> query = em.createQuery(sql, KidCare.class);
        query.setParameter("care_id", post_id);
        List<KidCare> list = query.getResultList();
        for (KidCare entity : list) {
            return entity;
        }
        return null;
    }

    @Override
    public List<KidCare> search(KidCareSearchDto dto) {
        ArrayList<KidCare> kidcares = new ArrayList<>();
        String sql = "select kidCare from KidCare kidCare where kidCare.si =: si " +
                "and kidCare.gu =: gu and kidCare.dong =: dong";
        TypedQuery<KidCare> query = em.createQuery(sql, KidCare.class);
        query.setParameter("si",dto.getSi());
        query.setParameter("gu", dto.getGu());
        query.setParameter("dong",dto.getDong());
        List<KidCare> list = query.getResultList();
        for(KidCare kidCare : list){
            int arr[] = {0,0,0,0}; //care_type, care_term, care_day, care_time 순으로
            // 해당여부 체크하기 위한 배열
            for(String care_type : dto.getCare_type()){
                if(kidCare.getCare_type().contains(care_type)){
                    arr[0] = 1; break;
                }
            }
            for(String care_term : dto.getCare_term()){
                if(kidCare.getCare_term().contains(care_term)){
                    arr[1] = 1; break;
                }
            }
            for(String care_day : dto.getCare_day()){
                if(kidCare.getDate().contains(care_day)){
                    arr[2] = 1; break;
                }
            }
            for(String care_time : dto.getCare_time()){
                if(kidCare.getTime().equals(care_time)) {
                    arr[3] = 1; break;
                }
            }

            int flag = 1;
            for(int i : arr){
                if(i==0) flag=0;
            }
            if(flag==1) kidcares.add(kidCare);
        }


        return kidcares;

    }

    @Transactional
    @Override
    public int delete(int post_id){
        String sql = "delete from KidCare kidCare where kidCare.care_id = :care_id";
        Query query = em.createQuery(sql);
        query.setParameter("care_id", post_id);
        query.executeUpdate();
        KidCare kidCare = findByCare_id(post_id);
        System.out.println(kidCare);
        if(kidCare==null) return 1;
        return 0;
    }
    @Override
    public void flush() {

    }

    @Override
    public <S extends KidCare> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends KidCare> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<KidCare> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public KidCare getOne(Integer integer) {
        return null;
    }

    @Override
    public KidCare getById(Integer integer) {
        return null;
    }

    @Override
    public KidCare getReferenceById(Integer integer) {
        return null;
    }

    @Override
    public <S extends KidCare> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends KidCare> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends KidCare> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends KidCare> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends KidCare> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends KidCare> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends KidCare, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends KidCare> S save(S entity) {
        return null;
    }

    @Override
    public <S extends KidCare> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<KidCare> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public List<KidCare> findAll() {
        return null;
    }

    @Override
    public List<KidCare> findAllById(Iterable<Integer> integers) {
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
    public void delete(KidCare entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends KidCare> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<KidCare> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<KidCare> findAll(Pageable pageable) {
        return null;
    }
}
