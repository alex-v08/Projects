public class FactoryEstado {

        /*atributo que almacena la única instancia que será creada*/
        private static FactoryEstado instancia;

        /*constructor privado, para que no se pueda instanciar desde fuera*/
        private FactoryEstado()
        {        }

        /*SINGLETON*/
        /*getInstance() retorna la unica instancia que puede ser creada */
        public static FactoryEstado getInstance()
        {
            if(instancia == null)
                instancia = new FactoryEstado();

            return instancia;
        }

        /*método construir, recibe un string
        que determina el objeto concreto a instanciar */
        public ReparacionState getEstado(String tipo, Reparacion r)
        {

            /*indetificar el parámetro recibido con un switch*/
            switch (tipo){
                case "EnPresupuesto":
                    return new EnPresupuesto(r);
                case "EnProceso":
                    return new EnProceso(r);
                case "ParaEnvio":
                    return new ParaEnvio(r);
                case "Finalizado":
                    return new Finalizado(r);
                default:
                    System.out.println("Ups, no encontramos este objeto para construir");
                    return null;
            }
        }
}

