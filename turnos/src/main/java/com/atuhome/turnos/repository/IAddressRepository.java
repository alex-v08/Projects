package com.atuhome.turnos.repository;

import com.atuhome.turnos.Entitys.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IAddressRepository extends JpaRepository<Address, Long> {

    void create(Address address);

    void update(Address address);

    void delete(Address address);

     List<Address> findAll();



}
