package neoris.tienda.domain;

public class Producto {
    private Integer idProducto;
    private String descripcion;
    private Integer idCategoria;
    private Integer precioUnitario;
    private Integer unidadStock;
    private Integer unidadStrockMinimo;
    private Integer unidadStockMaximo;
    private Integer flgDiscontinuo;

    public Producto() {
    }

    public Producto(Integer idProducto, String descripcion, Integer idCategoria, Integer precioUnitario, Integer unidadStock, Integer unidadStrockMinimo, Integer unidadStockMaximo, Integer flgDiscontinuo) {
        this.idProducto = idProducto;
        this.descripcion = descripcion;
        this.idCategoria = idCategoria;
        this.precioUnitario = precioUnitario;
        this.unidadStock = unidadStock;
        this.unidadStrockMinimo = unidadStrockMinimo;
        this.unidadStockMaximo = unidadStockMaximo;
        this.flgDiscontinuo = flgDiscontinuo;
    }

    public Integer getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Integer idProducto) {
        this.idProducto = idProducto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getIdCategoria() {
        return idCategoria;
    }

    public void setIdCategoria(Integer idCategoria) {
        this.idCategoria = idCategoria;
    }

    public Integer getPrecioUnitario() {
        return precioUnitario;
    }

    public void setPrecioUnitario(Integer precioUnitario) {
        this.precioUnitario = precioUnitario;
    }

    public Integer getUnidadStock() {
        return unidadStock;
    }

    public void setUnidadStock(Integer unidadStock) {
        this.unidadStock = unidadStock;
    }

    public Integer getUnidadStrockMinimo() {
        return unidadStrockMinimo;
    }

    public void setUnidadStrockMinimo(Integer unidadStrockMinimo) {
        this.unidadStrockMinimo = unidadStrockMinimo;
    }

    public Integer getUnidadStockMaximo() {
        return unidadStockMaximo;
    }

    public void setUnidadStockMaximo(Integer unidadStockMaximo) {
        this.unidadStockMaximo = unidadStockMaximo;
    }

    public Integer getFlgDiscontinuo() {
        return flgDiscontinuo;
    }

    public void setFlgDiscontinuo(Integer flgDiscontinuo) {
        this.flgDiscontinuo = flgDiscontinuo;
    }

    @Override
    public String toString() {
        return "Producto{" +
                "idProducto=" + idProducto +
                ", descripcion='" + descripcion + '\'' +
                ", idCategoria=" + idCategoria +
                ", precioUnitario=" + precioUnitario +
                ", unidadStock=" + unidadStock +
                ", unidadStrockMinimo=" + unidadStrockMinimo +
                ", unidadStockMaximo=" + unidadStockMaximo +
                ", flgDiscontinuo=" + flgDiscontinuo +
                '}';
    }
}
