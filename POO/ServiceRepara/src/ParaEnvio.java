public class ParaEnvio implements ReparacionState{

    // variable para referenciar la reparacion
    Reparacion reparacion;

    // constructor y muestra el estado
    public ParaEnvio(Reparacion t) {
        this.reparacion = t;
        System.out.println("Para Envio");
        reparacion.mostrar();
    }

    // no se hace aca
    public void  valorPresupuesto (float valor) throws Exception {
        throw new Exception("Se ingresa el presupuesto solo en Presupuesto");
    }

    // no se hace aca
    public void  sumaRepuesto(float valor) throws Exception {
        throw new Exception("Se suma solamente en Proceso");
    }

    // pone la direccion
    public void  cambiarDireccion(String nuevaDireccion) throws Exception{
        reparacion.setDireccion(nuevaDireccion);
    }

    // pasa al estado sig
    public void siguientePaso() throws Exception {
        reparacion.setEstado(FactoryEstado.getInstance().getEstado("Finalizado", reparacion));
    }
}