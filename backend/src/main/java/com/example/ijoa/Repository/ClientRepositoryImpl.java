package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Client;
import com.example.ijoa.Domain.KidCare;
import com.example.ijoa.Dto.ClientRegisterDto;
import com.example.ijoa.Dto.JoinDto;
import com.example.ijoa.Dto.LoginDto;
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

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

@Repository
public class ClientRepositoryImpl implements ClientRepository {


    private EntityManager em;

    public ClientRepositoryImpl(EntityManager em) {
        this.em = em;
    }

    public int join(JoinDto dto) {
        Client client = new Client();
        client.setName(dto.getName());
        client.setId(dto.getId());
        client.setPw(dto.getPw());
        client.setNickname(dto.getNickname());
        client.setBirth(dto.getBirth());
        client.setEmail(dto.getEmail());
        client.setAddress(dto.getAddress());
        client.setImage_url(dto.getImage_url());
        client.setGender(dto.getGender());
        client.setPhone(dto.getPhone());

        System.out.println(client.getGender());
        em.persist(client);
        if (findById(client.getClient_id()) != null) return 1;
        return 0;
    }

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
    public int login(LoginDto dto) {
        String sql = "select client from Client client where id = :id and pw = :pw";
        TypedQuery<Client> query = em.createQuery(sql, Client.class);
        query.setParameter("id", dto.getId());
        query.setParameter("pw", dto.getPw());
        List<Client> list = query.getResultList();
        if(list.size()>0) return 1;
        return 0;
    }

    public int register(HttpServletRequest request, ClientRegisterDto dto){
        HttpSession session = request.getSession();
        String id = (String)session.getAttribute("id");
        Client client = findById(id);
        KidCare kidCare = new KidCare();
        kidCare.setClient(client);
        kidCare.setTitle(dto.getTitle());
        kidCare.setDate(dto.getDate());
        kidCare.setPlace(dto.getPlace());
        kidCare.setTime(dto.getTime());
        kidCare.setCost(dto.getCost());
        kidCare.setContent(dto.getContent());
        kidCare.setRegion(dto.getRegion());
        kidCare.setCare_type(dto.getCare_type());

        em.persist(kidCare);
        kidCare.getCare_id();
        if(kidCare.getCare_id()>0) return 1;
        return 0;

    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends Client> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Client> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<Client> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Client getOne(Integer integer) {
        return null;
    }

    @Override
    public Client getById(Integer integer) {
        return null;
    }

    @Override
    public Client getReferenceById(Integer integer) {
        return null;
    }

    @Override
    public <S extends Client> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Client> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Client> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Client> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Client> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Client> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Client, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends Client> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Client> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Client> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public List<Client> findAll() {
        return null;
    }

    @Override
    public List<Client> findAllById(Iterable<Integer> integers) {
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
    public void delete(Client entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends Client> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<Client> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Client> findAll(Pageable pageable) {
        return null;
    }
}


