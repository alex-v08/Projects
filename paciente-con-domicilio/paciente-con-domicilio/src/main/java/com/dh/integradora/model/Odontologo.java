package com.dh.integradora.model;

import java.util.Objects;

public class Odontologo {

    private String id;
    private String nombre;
    private String apellido;
    private String matricula;

    public Odontologo() {}

    public Odontologo(String nombre, String apellido, String matricula) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
    }

    public Odontologo(String id, String nombre, String apellido, String matricula) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.matricula = matricula;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getMatricula() {
        return matricula;
    }

    public void setMatricula(String matricula) {
        this.matricula = matricula;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Odontologo that = (Odontologo) o;
        return id.equals(that.id) && nombre.equals(that.nombre) && apellido.equals(that.apellido) && matricula.equals(that.matricula);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, apellido, matricula);
    }

    @Override
    public String toString() {
        return "Odontologo" +
                "\n\tNombre: '" + nombre + '\'' +
                "\n\tApellido: '" + apellido + '\'' +
                "\n\tMatricula: " + matricula;
    }
}
