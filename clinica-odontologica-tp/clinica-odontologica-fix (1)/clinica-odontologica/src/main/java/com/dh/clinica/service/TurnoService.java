package com.dh.clinica.service;

import com.dh.clinica.entity.Turno;
import com.dh.clinica.repository.ITurnoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TurnoService {

    private final ITurnoRepository ITurnoRepository;





    @Autowired
    public TurnoService(ITurnoRepository ITurnoRepository) {
        this.ITurnoRepository = ITurnoRepository;
    }

    public Turno registrarTurno(Turno turno) {
        return ITurnoRepository.save(turno);
    }

    public List<Turno> listar() {
        return ITurnoRepository.findAll();
    }

    public void eliminar(Integer id) {
        ITurnoRepository.deleteById(id);
    }

    public Turno actualizar(Turno turno) {
        return ITurnoRepository.save(turno);
    }

    public Optional<Turno> buscar(Integer id) {
        return ITurnoRepository.findById(id);
    }

}
