public interface ReparacionState {

    // interface para todas las funconalidades de una reparacion
    public void  valorPresupuesto (float valor) throws Exception;
    public void  sumaRepuesto(float valor)throws Exception;;
    public void  cambiarDireccion(String nuevaDireccion)throws Exception;;
    public void  siguientePaso()throws Exception;;

}
