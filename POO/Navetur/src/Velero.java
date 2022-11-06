public class Velero extends Embarcacion{
    private int cantidadMastiles;
    private boolean soyGrande;

    public Velero(Capitan capitan, double precio, double valorAdicional, int anioDeFabricacion, double eslora, int cantidadMastiles) {
        super(capitan, precio, valorAdicional, anioDeFabricacion, eslora);
        this.cantidadMastiles = cantidadMastiles;
    }

    public int getCantidadMastiles() {
        return cantidadMastiles;
    }

    public void setCantidadMastiles(int cantidadMastiles) {
        this.cantidadMastiles = cantidadMastiles;
    }

    public boolean isSoyGrande() {
        return soyGrande;
    }

    public void setSoyGrande(boolean soyGrande) {
        this.soyGrande = this.cantidadMastiles>4;
    }
}
