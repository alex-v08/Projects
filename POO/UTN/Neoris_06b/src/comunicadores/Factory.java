package comunicadores;

public class Factory
{
	public static Comunicador crearComunicador()
	{
//		return new PalomaMensajera();
		return new TelefonoCelular();
	}
}
