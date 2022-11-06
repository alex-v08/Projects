public class Reparacion{

    // variable que conserva el estado
    private ReparacionState estado;
    // varialbe con el nombre del articulo
    private String articulo;
    // variable con el valor del presupuesto
    private float presupuesto;
    // variable con la direccion
    private String direccion;

    // constructor que pone como estado inicial en presupuesto ( a traves de Factory )
    Reparacion(String elArt){
        this.articulo = elArt;
        setEstado(FactoryEstado.getInstance().getEstado("EnPresupuesto", this));
    }

    public ReparacionState getEstado() {
        return estado;
    }

    public void setEstado(ReparacionState estado) {
        this.estado = estado;
    }

    public String getArticulo() {
        return articulo;
    }

    public void setArticulo(String articulo) {
        this.articulo = articulo;
    }

    public float getPresupuesto() {
        return presupuesto;
    }


    public String getDireccion() {
        return direccion;
    }

    public void setPresupuesto(float presupuesto) {
        this.presupuesto = presupuesto;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    // muestra el estado de la reparaciob
    public void mostrar(){
        System.out.println("Articulo   : "+this.getArticulo());
        System.out.println("Presupuesto: "+this.getPresupuesto());
        System.out.println("Direccion  : "+this.getDireccion());
        System.out.println("==========================================");
    };

    public void valorPresupuesto(float valor)  throws Exception {
        this.estado.valorPresupuesto(valor);
    }

    public void sumaRepuesto(float valor)  throws Exception {
        this.estado.sumaRepuesto(valor);
    }

    public void cambiarDireccion(String direccion)  throws Exception {
        this.estado.cambiarDireccion(direccion);
    }


    public void  siguientePaso()  throws Exception  {
        this.estado.siguientePaso();
    };

}
