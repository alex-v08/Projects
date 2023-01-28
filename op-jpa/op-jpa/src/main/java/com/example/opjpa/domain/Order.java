package com.example.opjpa.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.Date;
@Entity
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idOrder;
    private int idCliente;

    public int getIdOrder() {
        return idOrder;
    }

    public void setIdOrder(int idOrder) {
        this.idOrder = idOrder;
    }

    public int getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(int idCliente) {
        this.idCliente = idCliente;
    }

    public int getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(int idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public Date getFechaGenerada() {
        return fechaGenerada;
    }

    public void setFechaGenerada(Date fechaGenerada) {
        this.fechaGenerada = fechaGenerada;
    }

    public Date getFechaEntregada() {
        return fechaEntregada;
    }

    public void setFechaEntregada(Date fechaEntregada) {
        this.fechaEntregada = fechaEntregada;
    }

    private int idEmpleado;
    private Date fechaGenerada;
    private Date fechaEntregada;





}
