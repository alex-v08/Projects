package neoris.domain;

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

    private int idPromocion;
    private String descripcion;

}
