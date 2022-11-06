package comunicadores;

public class DemoComunicador
{
	public static void main(String[] args)
	{
		Comunicador x = Factory.crearComunicador();
		x.enviarMensaje("Hola, esto es un curso de Java");
	}
}
