package cine.com;

public class Cine {
    private String nombre;
    private String direccion;
    private String cantidadEspectadores;

    public Cine(String nombre, String direccion, String cantidadEspectadores) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.cantidadEspectadores = cantidadEspectadores;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getCantidadEspectadores() {
        return cantidadEspectadores;
    }

    public void setCantidadEspectadores(String cantidadEspectadores) {
        this.cantidadEspectadores = cantidadEspectadores;
    }
}
