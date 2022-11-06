package transportistas.com;

import java.util.ArrayList;
import java.util.List;

public class Barco {
    private String nombre;
    private List<CargaContenedor> Contenedores = new ArrayList<>();

    public Barco(String nombre) {
        this.nombre = nombre;
    }


    public void agregarContenedor(CargaContenedor contenedor){
        this.Contenedores.add(contenedor);
    }



    public void mostrarCargas(){

        System.out.println("En Barco "+this.nombre);

        for (CargaContenedor contenedor : this.Contenedores) {
            System.out.println(contenedor.getNombre());
            System.out.println(contenedor.CalcularPeso());

            }
        }
    }


