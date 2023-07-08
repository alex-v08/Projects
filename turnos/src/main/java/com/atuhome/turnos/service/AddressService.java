package com.atuhome.turnos.service;

import com.atuhome.turnos.Entitys.Address;
import com.atuhome.turnos.repository.IAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AddressService implements IAddressRepository{

    final IAddressRepository addressRepository;

    @Autowired
    public AddressService(IAddressRepository addressRepository) {

        this.addressRepository = addressRepository;
    }

    public void createAddress(Address address) {

        addressRepository.save(address);


    }

    public void updateAddress(Long id, Address address) {

        addressRepository.save(address);



    }

    public void deleteAddress(Long id) {

        addressRepository.deleteById(id);

    }

    @Override
    public void create(Address address) {

    }

    @Override
    public void update(Address address) {

    }

    @Override
    public void delete(Address address) {

    }

    @Override
    public Optional<Address> findById(Long aLong) {
        return Optional.empty();
    }

    public void findAll() {

        addressRepository.findAll();


    }

    @Override
    public void deleteById(Long aLong) {

    }

    public void findById() {

    }

}
