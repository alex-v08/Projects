package com.example.opjpa.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity

public class Promocion
{
    public int getIdPromocion() {
        return idPromocion;
    }

    public void setIdPromocion(int idPromocion) {
        this.idPromocion = idPromocion;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String toString() {
        return "Promocion{" +
                "idPromocion=" + idPromocion +
                ", descripcion='" + descripcion + '\'' +
                '}';
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPromocion;
    private String descripcion;

}
