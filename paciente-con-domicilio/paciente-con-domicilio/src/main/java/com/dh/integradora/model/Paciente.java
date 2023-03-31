package com.dh.integradora.model;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Objects;

public class Paciente {

    private long id;
    private String apellido;
    private String nombre;
    private String email;
    private String dni;
    private LocalDate fechaIngreso;
    private Domicilio domicilio;

    public Paciente(long id, String apellido, String nombre, String email, String dni, LocalDate fechaIngreso) {
        this.id = id;
        this.apellido = apellido;
        this.nombre = nombre;
        this.email = email;
        this.dni = dni;
        this.fechaIngreso = fechaIngreso;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDni() {
        return dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public LocalDate getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(LocalDate fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Paciente paciente = (Paciente) o;
        return id == paciente.id && apellido.equals(paciente.apellido) && nombre.equals(paciente.nombre) && email.equals(paciente.email) && dni.equals(paciente.dni) && fechaIngreso.equals(paciente.fechaIngreso) && domicilio.equals(paciente.domicilio);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, apellido, nombre, email, dni, fechaIngreso, domicilio);
    }

    @Override
    public String toString() {
        String informacion = "Paciente" +
                "\n\tNombre: '" + nombre + '\'' +
                "\n\tApellido: '" + apellido + '\'' +
                "\n\tDNI: " + dni +
                "\n\tFecha de Ingreso: " + fechaIngreso;
        if (domicilio != null &&
                domicilio.getCalle() != null && domicilio.getNumero() != null &&
                domicilio.getLocalidad() != null && domicilio.getProvincia() != null) {
            informacion += domicilio.toString();
        }
        return informacion;
    }
}
