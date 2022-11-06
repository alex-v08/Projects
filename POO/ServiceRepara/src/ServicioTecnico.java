public class ServicioTecnico {

    public static void main(String[] args) {
        Reparacion unaRepa = new Reparacion("Batidora");

        try{
            unaRepa.valorPresupuesto(100);
            unaRepa.siguientePaso();
            unaRepa.sumaRepuesto(30);
            unaRepa.sumaRepuesto(10);
            unaRepa.siguientePaso();
            unaRepa.cambiarDireccion("San Nicolas 2345");
            unaRepa.siguientePaso();
            unaRepa.siguientePaso();

        }catch (Exception e){
            System.out.println(e.getMessage());
        }

    }
}


