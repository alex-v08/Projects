package com.atuhome.turnos.repository;

import com.atuhome.turnos.Entitys.Address;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface IAddressRepository extends JpaRepository<Address, Long> {

    void create(Address address);

    void update(Address address);

    void delete(Address address);

     List<Address> findAll();



}
