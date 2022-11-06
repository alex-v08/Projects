public class EmpleadoFactory {

    public static final String CODIGO_EMPLEADO_RELACION = "EMP-RD";
    public static final String CODIGO_EMPLEADO_POR_HORA = "EMP-PH";
    private static EmpleadoFactory instance;

    private EmpleadoFactory(){
    }

    public static EmpleadoFactory getInstance() {
        if(instance == null){
            instance = new EmpleadoFactory();
        }
        return instance;
    }

    public Empleado crearEmpleado(String codigo){
        switch (codigo) {
            case CODIGO_EMPLEADO_RELACION :
                //crear empleado en relacion de dependencia
                return new EmpleadoRelacionDependencia();
            case CODIGO_EMPLEADO_POR_HORA:
                // crear y retornar un empleado por hora
                return new EmpleadoPorHora();
            default:
                return null;
        }
    }
}
