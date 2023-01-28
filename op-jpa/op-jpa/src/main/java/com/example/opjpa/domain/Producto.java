package com.example.opjpa.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Producto
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idProducto;
    private String descripcion;

    public int getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(int idProducto) {
        this.idProducto = idProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public int getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(int idCategoria) {
        this.idCategoria = idCategoria;
    }

    public double getPrecioUnitario() {
        return precioUnitario;
    }

    public void setPrecioUnitario(double precioUnitario) {
        this.precioUnitario = precioUnitario;
    }

    public int getUnidadesStock() {
        return unidadesStock;
    }

    public void setUnidadesStock(int unidadesStock) {
        this.unidadesStock = unidadesStock;
    }

    public int getUnidadesStockMinimo() {
        return unidadesStockMinimo;
    }

    public void setUnidadesStockMinimo(int unidadesStockMinimo) {
        this.unidadesStockMinimo = unidadesStockMinimo;
    }

    public int getUnidadesStockMaximo() {
        return unidadesStockMaximo;
    }

    public void setUnidadesStockMaximo(int unidadesStockMaximo) {
        this.unidadesStockMaximo = unidadesStockMaximo;
    }

    public int getFlgDiscontinuo() {
        return flgDiscontinuo;
    }

    public void setFlgDiscontinuo(int flgDiscontinuo) {
        this.flgDiscontinuo = flgDiscontinuo;
    }

    public String toString() {
        return "Producto{" +
                "idProducto=" + idProducto +
                ", descripcion='" + descripcion + '\'' +
                ", idCategoria=" + idCategoria +
                ", precioUnitario=" + precioUnitario +
                ", unidadesStock=" + unidadesStock +
                ", unidadesStockMinimo=" + unidadesStockMinimo +
                ", unidadesStockMaximo=" + unidadesStockMaximo +
                ", flgDiscontinuo=" + flgDiscontinuo +
                '}';
    }

    public int getIdProveedor() {
        return idProveedor;
    }

    public void setIdProveedor(int idProveedor) {
        this.idProveedor = idProveedor;
    }

    private int idCategoria;
    private int idProveedor;
   private double precioUnitario;
   private int unidadesStock;
   private int unidadesStockMinimo;
    private int unidadesStockMaximo;
    private int  flgDiscontinuo;




}
