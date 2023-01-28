package neoris.tienda.domain;

public class Cliente {
    private Integer idCliente;
    private Integer idUsuario;
    private String nombre;
    private String direccion;
    private Integer idTipoCliente;


    public Cliente() {
    }

    public Cliente(Integer idCliente, Integer idUsuario, String nombre, String direccion, Integer idTipoCliente) {
        this.idCliente = idCliente;
        this.idUsuario = idUsuario;
        this.nombre = nombre;
        this.direccion = direccion;
        this.idTipoCliente = idTipoCliente;
    }

    public Integer getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(Integer idCliente) {
        this.idCliente = idCliente;
    }

    @Override
    public String toString() {
        return "Cliente{" +
                "idCliente=" + idCliente +
                ", idUsuario=" + idUsuario +
                ", nombre='" + nombre + '\'' +
                ", direccion='" + direccion + '\'' +
                ", idTipoCliente=" + idTipoCliente +
                '}';
    }

    public Integer getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(Integer idUsuario) {
        this.idUsuario = idUsuario;
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

    public Integer getIdTipoCliente() {
        return idTipoCliente;
    }

    public void setIdTipoCliente(Integer idTipoCliente) {
        this.idTipoCliente = idTipoCliente;
    }
}
