package transportistas.com;

public class CargaFactory {

    private static CargaFactory instance= null;

    public static final String CARGASIMPLE= "CAR-SIMP";
    public static final String CONTENEDOR = "CONT";

       private CargaFactory(){
    }

    public static CargaFactory getInstance(){
        if(instance == null)
            instance = new CargaFactory();

        return instance;
    }

    public Carga crearCarga(String tipoCarga){
        switch (tipoCarga) {
            case CargaFactory.CARGASIMPLE:
                return new CargaSimple();
            case CargaFactory.CONTENEDOR:
                return new CargaContenedor();
        }
        return null;

    }

}
