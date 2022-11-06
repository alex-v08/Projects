package comunicadores;

public class Telegrafo extends Antiguedad implements Comunicador
{

	@Override
	public void enviarMensaje(String mssg)
	{
		try
		{
			Thread.sleep(10000);
			System.out.println("PI PIIII PI PI PIIII, "+mssg);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}

}
