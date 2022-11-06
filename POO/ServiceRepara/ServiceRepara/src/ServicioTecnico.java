public class ServicioTecnico {

    public static void main(String[] args) {
        Reparacion unaRepa = new Reparacion("Batidora");

        try{
            unaRepa.valorPresupuesto(100);
            unaRepa.siguientePaso();

            unaRepa.siguientePaso();

            unaRepa.siguientePaso();
            unaRepa.siguientePaso();

        }catch (Exception e){
            System.out.println(e.getMessage());
        }

    }
}


