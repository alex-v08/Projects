package demo;

public class MiThread extends Thread
{
	@Override
	public void run()
	{
		for(int i=0; i<10; i++)
		{
			try
			{
				// demoro entre 0 y 5 segundos
				int delay = (int)(Math.random()*5000);
				Thread.sleep(delay);
				
				// muestro un caracter al azar
				char c = (char)((Math.random()*26)+'A');
				System.out.println("Hilo --->"+c);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				throw new RuntimeException(e);
			}
		}
	}
}
