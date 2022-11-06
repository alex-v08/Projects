package demo;

public class Numero 
{
	public static final double PI = 3.1415926;
	public static final double E = 2.71;
	
	private int valor;
	
	public Numero()
	{
	}
	
	public Numero(int v)
	{
		valor = v;
	}

	@Override
	public boolean equals(Object obj)
	{
		Numero x = (Numero)obj;
		return this.valor==x.valor;
	}
	
	

	@Override
	public String toString()
	{
		return Integer.toString(this.valor);
	}
	
	public boolean esPar()
	{
		return valor%2==0;
//		
//		boolean ret;
//		
//		int resto = valor%2;
//		if( resto==0 )
//		{
//			ret = true;
//		}
//		else
//		{
//			ret = false;
//		}
//		
//		return ret;
	}
	
	public int getValor()
	{
		return valor;
	}

	public void setValor(int valor)
	{
		this.valor=valor;
	}
	
	public static int sumar(int a,int b)
	{
		return a+b;
	}
	
	public int sumar(int a)
	{
		return valor+a;
	}
	
	public Numero sumar(Numero x)
	{
		this.valor = this.valor+x.valor;
		return this;
	}
}
