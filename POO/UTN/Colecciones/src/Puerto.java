import java.util.ArrayList;
import java.util.Collections;

public class Puerto {
    ArrayList<Contenedor> contenedores = new ArrayList<>();

    public void nuevoContenedor(Contenedor contenedor){
        this.contenedores.add(contenedor);
    }

    public void mostrarContenedores(){
        Collections.sort(contenedores);
        for (Contenedor contenedores: contenedores){
            System.out.println((contenedores.getId());
        }
    }

    public ArrayList<Contenedor> getContenedores() {
        return contenedores;
    }

    public void setContenedores(ArrayList<Contenedor> contenedores) {
        this.contenedores = contenedores;
    }

    public int contenedoresPeligrosos(){
        int contador = 0;
        for (Contenedor contenedores: contenedores){
            if (contenedores.isPeligroso() && contenedores.getProcedencia().equals("Desconocida")){
                contador++;
            }
        }
        return contador;
    }
}