package com.example.ijoa.Repository;

import com.example.ijoa.Domain.Client;
import com.example.ijoa.Domain.Contract;
import com.example.ijoa.Dto.ContractDto;
import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
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
public class ContractRepositoryImpl implements ContractRepository{

    private EntityManager em;

    public ContractRepositoryImpl(EntityManager em) {this.em = em;}

    @Override
    public int register(ContractDto dto){
        Contract contract = new Contract();
        contract.setClient(dto.getClient());
        contract.setApplier(dto.getApplier());
        contract.setStart_date(dto.getStart_date());
        contract.setEnd_date(dto.getEnd_date());
        contract.setStart_time(dto.getStart_time());
        contract.setEnd_time(dto.getEnd_time());
        contract.setCost(dto.getCost());
        contract.setRegion(dto.getRegion());
        contract.setPlace(dto.getPlace());
        contract.setCare_type(dto.getCare_type());
        contract.setPayment_state("정산전");
        em.persist(contract);
        Contract findContract = em.find(Contract.class, contract.getContract_id());
        if(findContract!=null) return 1;
        return 0;
    }

    public int getTableSize(){
        String sql = "select count(*) from Contract";
        Query query = em.createNativeQuery(sql);
        return ((Number) query.getSingleResult()).intValue();
    }

    @Override
    public void flush() {

    }

    @Override
    public <S extends Contract> S saveAndFlush(S entity) {
        return null;
    }

    @Override
    public <S extends Contract> List<S> saveAllAndFlush(Iterable<S> entities) {
        return null;
    }

    @Override
    public void deleteAllInBatch(Iterable<Contract> entities) {

    }

    @Override
    public void deleteAllByIdInBatch(Iterable<Integer> integers) {

    }

    @Override
    public void deleteAllInBatch() {

    }

    @Override
    public Contract getOne(Integer integer) {
        return null;
    }

    @Override
    public Contract getById(Integer integer) {
        return null;
    }

    @Override
    public Contract getReferenceById(Integer integer) {
        return null;
    }

    @Override
    public <S extends Contract> Optional<S> findOne(Example<S> example) {
        return Optional.empty();
    }

    @Override
    public <S extends Contract> List<S> findAll(Example<S> example) {
        return null;
    }

    @Override
    public <S extends Contract> List<S> findAll(Example<S> example, Sort sort) {
        return null;
    }

    @Override
    public <S extends Contract> Page<S> findAll(Example<S> example, Pageable pageable) {
        return null;
    }

    @Override
    public <S extends Contract> long count(Example<S> example) {
        return 0;
    }

    @Override
    public <S extends Contract> boolean exists(Example<S> example) {
        return false;
    }

    @Override
    public <S extends Contract, R> R findBy(Example<S> example, Function<FluentQuery.FetchableFluentQuery<S>, R> queryFunction) {
        return null;
    }

    @Override
    public <S extends Contract> S save(S entity) {
        return null;
    }

    @Override
    public <S extends Contract> List<S> saveAll(Iterable<S> entities) {
        return null;
    }

    @Override
    public Optional<Contract> findById(Integer integer) {
        return Optional.empty();
    }

    @Override
    public boolean existsById(Integer integer) {
        return false;
    }

    @Override
    public List<Contract> findAll() {
        return null;
    }

    @Override
    public List<Contract> findAllById(Iterable<Integer> integers) {
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
    public void delete(Contract entity) {

    }

    @Override
    public void deleteAllById(Iterable<? extends Integer> integers) {

    }

    @Override
    public void deleteAll(Iterable<? extends Contract> entities) {

    }

    @Override
    public void deleteAll() {

    }

    @Override
    public List<Contract> findAll(Sort sort) {
        return null;
    }

    @Override
    public Page<Contract> findAll(Pageable pageable) {
        return null;
    }
}
