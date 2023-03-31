package com.dh.integradora.services;

import com.dh.integradora.model.Odontologo;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OdontologoService {

    private List<Odontologo> odontologos = new ArrayList<>();

    public OdontologoService(){
        odontologos.add(new Odontologo("111", "Pepe", "Pepardo", "12AB"));
        odontologos.add(new Odontologo("222", "Pepa", "Peparda", "34AB"));
        odontologos.add(new Odontologo("333", "Pepo", "Pepardo", "56AB"));
    }

    public List<Odontologo> getAll(){
        return odontologos;
    }

    public Odontologo getOdontologoById(String email){
        for (Odontologo paciente : odontologos) {
            if (paciente.getId().equals(email)) {
                return paciente;
            }
        }
        return null;
    }
}
