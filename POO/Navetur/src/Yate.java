public class Yate extends Embarcacion implements Comparable{
    private int cantidadDeCamarotes;

    public Yate(Capitan capitan, double precio, double valorAdicional, int anioDeFabricacion, double eslora, int cantidadDeCamarotes) {
        super(capitan, precio, valorAdicional, anioDeFabricacion, eslora);
        this.cantidadDeCamarotes = cantidadDeCamarotes;
    }


    public int getCantidadDeCamarotes() {
        return cantidadDeCamarotes;
    }

    public void setCantidadDeCamarotes(byte cantidadDeCamarotes) {
        this.cantidadDeCamarotes = cantidadDeCamarotes;
    }

    @Override
    public int compareTo(Object object) {
        Yate otroYate = (Yate)object;

        if(otroYate.cantidadDeCamarotes < this.cantidadDeCamarotes){
            return 1;
        } else if (otroYate.cantidadDeCamarotes > this.cantidadDeCamarotes){
            return -1;
            }
        else {
            return 0;
        }
    }
}
