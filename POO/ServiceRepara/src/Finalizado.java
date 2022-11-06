public class Finalizado implements ReparacionState{

    // variable para referenciar la reparacion
    Reparacion reparacion;

    // constructor y muestra el estado
    public Finalizado(Reparacion reparacion) {
        this.reparacion = reparacion;
        System.out.println("Finalizado");
        this.reparacion.mostrar();
    }

    // no se hace aca
    public void  valorPresupuesto (float valor) throws Exception {
        throw new Exception("Se ingresa el presupuesto solo en Presupuesto");
    }

    // no se hace aca;
    public void  sumaRepuesto(float valor) throws Exception {
        throw new Exception("Se agrega repuesto en proceso");
    }

    // no se hace aca;
    public void  cambiarDireccion(String nuevaDireccion) throws Exception{
        throw new Exception("Se cambia solamente en envio");
    }

    // no puede pasar al estado sig
     public void  siguientePaso() throws Exception{
         throw new Exception("Ya esta finalizado");

    };

}
