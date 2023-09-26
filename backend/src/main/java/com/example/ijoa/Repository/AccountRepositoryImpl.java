package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Account;
import com.example.ijoa.Domain.Applier;
import com.example.ijoa.Dto.AccountRequestDto;
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
public class AccountRepositoryImpl implements AccountRepository{

    private EntityManager em;

    public AccountRepositoryImpl(EntityManager em) {this.em = em;}

    @Override
    public int register(String user_type, String user_id, AccountRequestDto dto){
        Account account = new Account();
        account.setDepositor(dto.getDepositor());
        account.setBank(dto.getBank());
        account.setAccount(dto.getAccount());
        account.setUser_id(user_id);
        account.setUser_type(user_type);
        em.persist(account);
        if(findById(user_id)!=null) return 1;
        return 0;

    }

    public Account findById(String user_id){
        String sql = "select account from Account account where user_id = :user_id";
        TypedQuery<Account> query = em.createQuery(sql, Account.class);
        query.setParameter("user_id", user_id);
        List<Account> list = query.getResultList();
        for (Account entity : list) {
            return entity; //첫번째 entity 바로 리턴. 어차피 찾는 유저는 하나일테니. (가입할 때 id 중복체크를 하기 때문)
        }
        return null;
    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends Account> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<Account> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Account getOne(Integer integer) {
        return null;
    }

    @Override
    public Account getById(Integer integer) {
        return null;
    }

    @Override
    public Account getReferenceById(Integer integer) {
        return null;
    }

    @Override
    public <S extends Account> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Account> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Account> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Account> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Account> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Account> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Account, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends Account> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Account> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Account> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Account> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public List<Account> findAll() {
        return null;
    }

    @Override
    public List<Account> findAllById(Iterable<Integer> integers) {
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
    public void delete(Account entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends Account> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<Account> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Account> findAll(Pageable pageable) {
        return null;
    }
}
