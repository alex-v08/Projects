public class EmpleadoRelacionDependencia extends Empleado{

    private Double sueldoMensual;


    public EmpleadoRelacionDependencia(String nombre, String apellido, Integer legajo,Double sueldoMensual) {
        super(nombre, apellido, legajo);
        this.sueldoMensual = sueldoMensual;

    }

    public EmpleadoRelacionDependencia() {
        super("Juan", "Perez", 123);
        sueldoMensual = 250.0;
    }

    @Override
    public Double calcularSueldo() {

        return sueldoMensual;
    }
}
