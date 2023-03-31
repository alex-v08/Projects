package com.dh.integradora.controllers;

import com.dh.integradora.model.Odontologo;
import com.dh.integradora.services.OdontologoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class OdontologoController {
    @Autowired
    public OdontologoService odontologoService;

    @ResponseBody
    @GetMapping("/odontologos/todos")
    public List<Odontologo> obtenerTodos(){
        return odontologoService.getAll();
    }

    @GetMapping("/odontologos/id")
    public String consultarOdontologoPorID(@RequestParam String id, Model model){
        Odontologo odontologo = odontologoService.getOdontologoById(id);
        String response = "error";

        if (odontologo != null){
            model.addAttribute("nombre", "odontólogo ".concat(odontologo.getNombre()));
            model.addAttribute("apellido", odontologo.getApellido());
            response = "informacion";
        } else {
            model.addAttribute("mensaje", "No se encontró ningún odontólogo con id: ".concat(id));
        }

        return response;
    }
}
