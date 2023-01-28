package neoris.tienda.domain;

public class Empleado {
    private Integer idEmpleado;
    private String nombre;
    private Integer idJefe;

    public Empleado() {
    }

    public Empleado(Integer idEmpleado, String nombre, Integer idJefe) {
        this.idEmpleado = idEmpleado;
        this.nombre = nombre;
        this.idJefe = idJefe;
    }

    public Integer getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(Integer idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getIdJefe() {
        return idJefe;
    }

    public void setIdJefe(Integer idJefe) {
        this.idJefe = idJefe;
    }

    @Override
    public String toString() {
        return "Empleado{" +
                "idEmpleado=" + idEmpleado +
                ", nombre='" + nombre + '\'' +
                ", idJefe=" + idJefe +
                '}';
    }
}
