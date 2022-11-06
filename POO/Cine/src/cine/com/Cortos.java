package cine.com;

public class Cortos  extends Pelicula{

    private boolean nacional;

    public boolean isNacional() {
        return nacional;
    }

    public Cortos(String nombre, String clasificacion, int duracion, String fechaFilmacion, String nombreDirector, Cine cine, boolean nacional) {
        super(nombre, clasificacion, duracion, fechaFilmacion, nombreDirector, cine);
        this.nacional = nacional;
    }

    public void setNacional(boolean nacional) {
        this.nacional = nacional;
    }

    public String queOrigen(){
        if (nacional){
            return "Nacional";
        }else{
            return "Extranjero";
        }
    }


    }

