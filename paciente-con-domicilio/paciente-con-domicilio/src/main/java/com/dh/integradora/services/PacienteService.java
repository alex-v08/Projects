package com.dh.integradora.services;

import com.dh.integradora.model.Paciente;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class PacienteService {

    private List<Paciente> pacientes = new ArrayList<>();

    public PacienteService(){
        pacientes.add(new Paciente(1, "Rodriguez","Mariano","asd", "38545656", LocalDate.of(2021,8,20)));
    }

    public List<Paciente> getAll(){
        return pacientes;
    }

    public Paciente getPacienteByEmail(String email){
        for (Paciente paciente : pacientes) {
            if (paciente.getEmail().equals(email)) {
                return paciente;
            }
        }
        return null;
    }
}
