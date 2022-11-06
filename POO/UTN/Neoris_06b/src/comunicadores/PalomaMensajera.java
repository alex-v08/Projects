package comunicadores;

public class PalomaMensajera extends Paloma implements Comunicador
{

	@Override
	public void enviarMensaje(String mssg)
	{
		try
		{
			Thread.sleep(15000);
			System.out.println("CU CURR CU CUU, "+mssg);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

}
