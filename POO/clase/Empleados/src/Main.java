public class Main {

    public static void main(String[] args) {
	// write your code here

    EmpleadoFactory empleadoFactory = EmpleadoFactory.getInstance();

    Empresa empresa = new Empresa("C4 S.A");

    empresa.agregarEmpleado(empleadoFactory.crearEmpleado(EmpleadoFactory.CODIGO_EMPLEADO_POR_HORA));
    empresa.agregarEmpleado(empleadoFactory.crearEmpleado(EmpleadoFactory.CODIGO_EMPLEADO_POR_HORA));
    empresa.agregarEmpleado(empleadoFactory.crearEmpleado("EMP-PH"));
    empresa.agregarEmpleado(empleadoFactory.crearEmpleado("EMP-RD"));

        System.out.println(empresa.calcularSueldosTotales());





    }
}
