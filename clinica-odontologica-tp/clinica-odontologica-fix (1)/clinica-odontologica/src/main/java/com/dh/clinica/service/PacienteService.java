package com.dh.clinica.service;


import com.dh.clinica.entity.Paciente;
import com.dh.clinica.repository.IPacienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class PacienteService {

    private final IPacienteRepository IPacienteRepository;

    @Autowired
    public PacienteService(IPacienteRepository IPacienteRepository) {
        this.IPacienteRepository = IPacienteRepository;
    }

    public Paciente guardar(Paciente p) {
       return IPacienteRepository.save(p);
    }

    public Optional<Paciente> buscar(Integer id) {
        return IPacienteRepository.findById(id);
    }

    public List<Paciente> buscarTodos() {
        return IPacienteRepository.findAll();
    }

    public void eliminar(Integer id) {
        IPacienteRepository.deleteById(id);
    }

    public Paciente actualizar(Paciente p) {
        return IPacienteRepository.save(p);
    }
}
