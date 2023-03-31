package com.dh.clinica.service;


import com.dh.clinica.entity.Domicilio;
import com.dh.clinica.repository.IDomicilioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class DomicilioService {
    private final IDomicilioRepository IDomicilioRepository;

    @Autowired
    public DomicilioService(IDomicilioRepository IDomicilioRepository) {
        this.IDomicilioRepository = IDomicilioRepository;
    }

    public Domicilio guardar(Domicilio d) {
        IDomicilioRepository.save(d);
        return d;
    }

    public Optional<Domicilio> buscar(Integer id) {
        return Optional.of(IDomicilioRepository.getOne(Long.valueOf(id)));
    }

    public List<Domicilio> buscarTodos() {
        return IDomicilioRepository.findAll();
    }

    public void eliminar(Integer id) {
        IDomicilioRepository.deleteById(Long.valueOf(id));
    }

}
