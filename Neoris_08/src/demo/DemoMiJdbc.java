package demo;

import demo.connect.MiJdbc;

import java.util.List;

public class DemoMiJdbc
{
	public static void main(String[] args)
	{
		MiJdbc x = MiJdbc.getInstance();
		
		String sql="";
		sql+="SELECT id_producto,descripcion ";
		sql+="FROM producto ";
		sql+="WHERE id_categoria=? ";

		List<Object[]> rtdos = x.query(sql,1);
		
		for(Object[] fila:rtdos)
		{
			for(int i=0;i<fila.length; i++)
			{
				String el = i<fila.length-1?", ":"\n";
				System.out.print(fila[i]+el);
			}
		}
				
		sql="";
		sql+="SELECT p.descripcion, c.descripcion, pp.descuento ";
		sql+="FROM producto p, categoria c, promocion_producto pp ";
		sql+="WHERE pp.id_producto=p.id_producto ";
		sql+="  AND p.id_categoria=c.id_categoria ";
		sql+="  AND c.id_categoria=? ";
		sql+="  AND pp.descuento>? ";
		
		rtdos = x.query(sql,3,0.2);
		
		for(Object[] fila:rtdos)
		{
			for(int i=0;i<fila.length; i++)
			{
				String el = i<fila.length-1?", ":"\n";
				System.out.print(fila[i]+el);
			}
		}

		x.disconnect();
	}
}
