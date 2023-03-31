package com.dh.clinica.repository;

import com.dh.clinica.entity.Paciente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPacienteRepository extends JpaRepository<Paciente, Integer> {
}
