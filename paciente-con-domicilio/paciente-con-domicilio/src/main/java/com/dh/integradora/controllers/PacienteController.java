package com.dh.integradora.controllers;

import com.dh.integradora.model.Paciente;
import com.dh.integradora.services.PacienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class PacienteController {
    @Autowired
    public PacienteService pacienteService;

    @ResponseBody
    @GetMapping("/pacientes/todos")
    public List<Paciente> obtenerTodos(){
        return pacienteService.getAll();
    }

    @GetMapping("/pacientes/email")
    public String consultarPacientePorEmail(@RequestParam String email, Model model){
        Paciente paciente = pacienteService.getPacienteByEmail(email);
        String response = "error";

        if (paciente != null){
            model.addAttribute("nombre", paciente.getNombre());
            model.addAttribute("apellido", paciente.getApellido());
            response = "informacion";
        } else {
            model.addAttribute("mensaje", "No se encontró ningún paciente con mail: ".concat(email));
        }

        return response;
    }
}
