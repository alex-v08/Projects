package transportistas.com;

import java.util.ArrayList;
import java.util.List;



public class CargaContenedor extends Carga {
    private float cantPesoContendedor;
    private List<Carga> cargas = new ArrayList<>();

    public void setCantPesoContendedor(float cantPesoContendedor) {
        this.cantPesoContendedor = cantPesoContendedor;
    }



    public void agregarCarga(Carga carga){
        this.cargas.add(carga);
    }


    @Override

    public float CalcularPeso(){
        float pesoTotal = this.cantPesoContendedor;
        for (Carga carga : this.cargas) {
            pesoTotal += carga.CalcularPeso();
        }
        return pesoTotal;
    }


}

