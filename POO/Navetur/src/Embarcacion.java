public abstract class Embarcacion {
    protected Capitan capitan;
    protected double precio;
    protected double valorAdicional;
    protected int anioDeFabricacion;
    protected double eslora;

    public Embarcacion(Capitan capitan, double precio, double valorAdicional, int anioDeFabricacion, double eslora) {
        this.capitan = capitan;
        this.precio = precio;
        this.valorAdicional = valorAdicional;
        this.anioDeFabricacion = anioDeFabricacion;
        this.eslora = eslora;
    }

    public double calculoAlquiler(){
        if(this.anioDeFabricacion>2020){
            return this.precio + this.valorAdicional;
        } else {
            return this.precio;
        }
    }

    public Capitan getCapitan() {
        return capitan;
    }

    public void setCapitan(Capitan capitan) {
        this.capitan = capitan;
    }

    public double getPrecio() {
        return precio;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public double getValorAdicional() {
        return valorAdicional;
    }

    public void setValorAdicional(double valorAdicional) {
        this.valorAdicional = valorAdicional;
    }

    public int getAnioDeFabricacion() {
        return anioDeFabricacion;
    }

    public void setAnioDeFabricacion(int anioDeFabricacion) {
        this.anioDeFabricacion = anioDeFabricacion;
    }

    public double getEslora() {
        return eslora;
    }

    public void setEslora(double eslora) {
        this.eslora = eslora;
    }
}
