package demo;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class DemoFinally
{
	public static void main(String[] args)
	{
		FileInputStream fis = null;
		
		try
		{
			fis = new FileInputStream("PEPE.txt");
			
			int x = Integer.parseInt("VERDURA,TOMATE,LECHUGA");
			System.out.println("Hola, chau!"+x);

			return;
		}
		catch(FileNotFoundException e)
		{
			System.out.println("Estoy en el catch");
			e.printStackTrace();
		}
		finally
		{
			try
			{
				System.out.println("Esto sale siempre");
				if( fis!=null ) fis.close();
			}
			catch(IOException e)
			{
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
