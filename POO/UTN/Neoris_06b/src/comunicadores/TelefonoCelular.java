package comunicadores;

public class TelefonoCelular extends Telefono implements Comunicador
{

	@Override
	public void enviarMensaje(String mssg)
	{
		try
		{
			Thread.sleep(5000);
			System.out.println("Hello Moto, "+mssg);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

}
