import java.sql.SQLOutput;

public class EnPresupuesto implements ReparacionState{

    // variable para referenciar la reparacion
    Reparacion t;

    // constructor y muestra el estado
    public EnPresupuesto(Reparacion t) {
        this.t = t;
        System.out.println("En presupuesto");
        t.mostrar();
    }

    // cambia el valor del presupuesto
    public void  valorPresupuesto (float valor)throws Exception {
        t.setPresupuesto(valor);
    };

    // no se hace aca
    public void  sumaRepuesto(float valor) throws Exception {
        throw new Exception("Se suma solamente en Proceso");
    };

    // no se hace aca
    public void  cambiarDireccion(String nuevaDireccion)throws Exception {
        throw new Exception("Se cambia solamente en envio");
    };

    // pasa al estado sig
    public void  siguientePaso() throws Exception{
        this.t.setEstado(FactoryEstado.getInstance().getEstado("EnProceso", t));
    };

}
