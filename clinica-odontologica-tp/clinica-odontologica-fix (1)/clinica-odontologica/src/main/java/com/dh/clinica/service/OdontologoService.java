package com.dh.clinica.service;

import com.dh.clinica.entity.Odontologo;
import com.dh.clinica.repository.IOdontologoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class OdontologoService {

    private final IOdontologoRepository IOdontologoRepository;

    @Autowired
    public OdontologoService(IOdontologoRepository IOdontologoRepository) {
        this.IOdontologoRepository = IOdontologoRepository;
    }

    public Odontologo registrarOdontologo(Odontologo odontologo) {
        return IOdontologoRepository.save(odontologo);

    }

    public void eliminar(Integer id) {
        IOdontologoRepository.deleteById(id);
    }

    public Optional<Odontologo> buscar(Integer id) {

        return IOdontologoRepository.findById(id);
    }

    public List<Odontologo> buscarTodos() {

        return IOdontologoRepository.findAll();
    }

    public Odontologo actualizar(Odontologo odontologo) {
        return IOdontologoRepository.save(odontologo);
    }
}
