package cine.com;

public class Largometraje extends Pelicula implements Comparable {

    private String tema;
    private int cantActoresPrincipales;

    public Largometraje(String nombre, String clasificacion, int duracion, String fechaFilmacion, String nombreDirector, Cine cine, String tema, int cantActoresPrincipales) {
        super(nombre, clasificacion, duracion, fechaFilmacion, nombreDirector, cine);
        this.tema = tema;
        this.cantActoresPrincipales = cantActoresPrincipales;
    }

    public String getTema() {
        return tema;
    }

    public void setTema(String tema) {
        this.tema = tema;
    }

    public int getCantActoresPrincipales() {
        return cantActoresPrincipales;
    }

    public void setCantActoresPrincipales(int cantActoresPrincipales) {
        this.cantActoresPrincipales = cantActoresPrincipales;
    }

    public int compareTo(Object o){
        Largometraje otroLargo = (Largometraje) o;
        if (this.cantActoresPrincipales > otroLargo.cantActoresPrincipales){
            return 1;
        }else if (this.cantActoresPrincipales < otroLargo.cantActoresPrincipales){
            return -1;
        }else{
            return 0;
        }
    }





}

