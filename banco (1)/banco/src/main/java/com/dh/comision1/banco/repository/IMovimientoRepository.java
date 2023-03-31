package com.dh.comision1.banco.repository;

import com.dh.comision1.banco.entinty.Movimiento;
import org.springframework.data.jpa.repository.JpaRepository;


public interface IMovimientoRepository extends JpaRepository<Movimiento, Integer>
{

}
