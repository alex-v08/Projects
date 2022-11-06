public class EnProceso implements ReparacionState{

    // variable para referenciar la reparacion
    Reparacion t;

    // constructor y muestra el estado
    public EnProceso(Reparacion t) {
        this.t = t;
        System.out.println("En Proceso");
        t.mostrar();
    }

    // no se hace aca
    public void  valorPresupuesto (float valor) throws Exception {
        throw new Exception("Se ingresa el presupuesto solo en Presupuesto");
    }

    // no se hace aca
    public void  sumaRepuesto(float valor) throws Exception  {
        t.setPresupuesto(t.getPresupuesto() + valor);

    }

    // no se hace aca
    public void  cambiarDireccion(String nuevaDireccion) throws Exception {
        throw new Exception("Se cambia solamente en envio");
    }

    // pasa al estado sig
    public void  siguientePaso() throws Exception {
        this.t.setEstado(FactoryEstado.getInstance().getEstado("ParaEnvio", t));
    }

}