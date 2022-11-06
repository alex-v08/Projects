package cine.com;

public abstract class Pelicula {
    protected String nombre;
    protected String Clasificacion;
    protected int duracion;
    protected String fechaFilmacion;
    protected String nombreDirector;
    protected Cine cine;

    public Pelicula(String nombre, String clasificacion, int duracion, String fechaFilmacion, String nombreDirector, Cine cine) {
        this.nombre = nombre;
        Clasificacion = clasificacion;
        this.duracion = duracion;
        this.fechaFilmacion = fechaFilmacion;
        this.nombreDirector = nombreDirector;
        this.cine = cine;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getClasificacion() {
        return Clasificacion;
    }

    public void setClasificacion(String clasificacion) {
        Clasificacion = clasificacion;
    }

    public int getDuracion() {
        return duracion;
    }

    public void setDuracion(int duracion) {
        this.duracion = duracion;
    }

    public String getFechaFilmacion() {
        return fechaFilmacion;
    }

    public void setFechaFilmacion(String fechaFilmacion) {
        this.fechaFilmacion = fechaFilmacion;
    }

    public String getNombreDirector() {
        return nombreDirector;
    }

    public void setNombreDirector(String nombreDirector) {
        this.nombreDirector = nombreDirector;
    }

    public  boolean  atp( ){
        if (this.Clasificacion == "ATP"){
            return true;
        }else{
            return false;

        }

    }


    }
