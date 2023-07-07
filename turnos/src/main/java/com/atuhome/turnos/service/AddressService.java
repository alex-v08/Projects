package com.atuhome.turnos.service;

import com.atuhome.turnos.repository.IAddressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

    final IAddressRepository addressRepository;

    @Autowired
    public AddressService(IAddressRepository addressRepository) {
        this.addressRepository = addressRepository;
    }

    public void createAddress() {

    }

    public void updateAddress() {

    }

    public void deleteAddress() {

    }

    public void findAll() {

    }

    public void findById() {

    }

}
