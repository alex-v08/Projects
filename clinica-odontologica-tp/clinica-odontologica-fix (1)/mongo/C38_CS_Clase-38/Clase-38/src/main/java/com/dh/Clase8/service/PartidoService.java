package com.dh.Clase8.service;

import com.dh.Clase8.model.Partido;
import com.dh.Clase8.repository.PartidoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartidoService {
    private PartidoRepository partidoRepository;

    @Autowired
    public PartidoService(PartidoRepository partidoRepository) {
        this.partidoRepository = partidoRepository;
    }
    public Partido registrarPartido(Partido partido){
        return partidoRepository.save(partido);
    }
}
