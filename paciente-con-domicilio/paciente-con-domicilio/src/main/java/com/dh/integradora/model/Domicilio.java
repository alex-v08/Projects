package com.dh.integradora.model;

import java.util.Objects;

public class Domicilio {

    private Integer domicilioID;
    private String calle;
    private Integer numero;
    private String localidad;
    private String provincia;

    public Domicilio() {}

    public Domicilio(Integer domicilioID) {
        this.domicilioID = domicilioID;
    }

    public Domicilio(String calle, Integer numero, String localidad, String provincia) {
        this.domicilioID = null;
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.provincia = provincia;
    }

    public Domicilio(Integer domicilioID, String calle, Integer numero, String localidad, String provincia) {
        this.domicilioID = domicilioID;
        this.calle = calle;
        this.numero = numero;
        this.localidad = localidad;
        this.provincia = provincia;
    }

    public Integer getDomicilioID() {
        return domicilioID;
    }

    public void setDomicilioID(Integer domicilioID) {
        this.domicilioID = domicilioID;
    }

    public String getCalle() {
        return calle;
    }

    public void setCalle(String calle) {
        this.calle = calle;
    }

    public Integer getNumero() {
        return numero;
    }

    public void setNumero(Integer numero) {
        this.numero = numero;
    }

    public String getLocalidad() {
        return localidad;
    }

    public void setLocalidad(String localidad) {
        this.localidad = localidad;
    }

    public String getProvincia() {
        return provincia;
    }

    public void setProvincia(String provincia) {
        this.provincia = provincia;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Domicilio domicilio = (Domicilio) o;
        return domicilioID.equals(domicilio.domicilioID) &&
               Objects.equals(calle, domicilio.calle) &&
               Objects.equals(numero, domicilio.numero) &&
               Objects.equals(localidad, domicilio.localidad) &&
               Objects.equals(provincia, domicilio.provincia);
    }

    @Override
    public int hashCode() {
        return Objects.hash(domicilioID, calle, numero, localidad, provincia);
    }

    @Override
    public String toString() {
        return "\n\tDomicilio:" +
                "\n\t\tCalle: '" + calle + '\'' +
                "\n\t\tNumero: '" + numero + '\'' +
                "\n\t\tLocalidad: " + localidad +
                "\n\t\tProvincia: " + provincia;
    }
}
