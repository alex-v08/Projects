package transportistas.com;

public class CargaSimple extends Carga{
    private boolean refrigerado;
    private float peso;



    public void setRefrigerado(boolean refrigerado) {
        this.refrigerado = refrigerado;
    }

    public float getPeso() {
        return peso;
    }

    public void setPeso(float peso) {
        this.peso = peso;
    }

    @Override
    public float CalcularPeso() {
        if (this.refrigerado){
            return (float) (this.peso * 1.1);
        }

        return this.peso;
    }

}


