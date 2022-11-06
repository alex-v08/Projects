package transportistas.com;

public class Main {
    public static void main(String[] args) {
//Barco
        Barco barco = new Barco("El barquito");

// Carga Simples
        CargaSimple cargaSimple1 = (CargaSimple) CargaFactory.getInstance().crearCarga(CargaFactory.CARGASIMPLE);
        CargaSimple cargaSimple2 = (CargaSimple) CargaFactory.getInstance().crearCarga(CargaFactory.CARGASIMPLE);

        cargaSimple1.setNombre("TV 32’ LCD");
        cargaSimple1.setPeso(3);
        cargaSimple1.setRefrigerado(false);

        cargaSimple2.setNombre("caja de medicamentos");
        cargaSimple2.setPeso(2);
        cargaSimple2.setRefrigerado(true);
//Contenedores

        CargaContenedor cargaContenedor1 = (CargaContenedor) CargaFactory.getInstance().crearCarga(CargaFactory.CONTENEDOR);
        cargaContenedor1.setNombre("Contenedor");

        cargaContenedor1.agregarCarga(cargaSimple1);
        cargaContenedor1.agregarCarga(cargaSimple2);

        cargaContenedor1.setCantPesoContendedor(100);

        cargaContenedor1.CalcularPeso();

        barco.agregarContenedor(cargaContenedor1);

        barco.mostrarCargas();



    }

    }
