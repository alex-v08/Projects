public class EmpleadoPorHora extends Empleado{

    private Double importePorHora;
    private Integer horasTrabajadas;

    public EmpleadoPorHora() {
        super("Juan", "Perez", 123);
        importePorHora = 10.0;
        horasTrabajadas = 10;
    }

    public EmpleadoPorHora(String nombre, String apellido, Integer legajo, Double importePorHora) {
        super(nombre, apellido, legajo);
        this.importePorHora = importePorHora;
        horasTrabajadas = 0;
    }


    @Override
    public Double calcularSueldo() {

        return importePorHora * horasTrabajadas;
    }

    public void cargarHoras(Integer horasIngresadas){
        horasTrabajadas += horasIngresadas;
    }
}
