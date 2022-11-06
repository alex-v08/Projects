package demo;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;

public class TestMiJdbc
{
	@Test
	public void testGetInstance()
	{
		MiJdbc i1 = MiJdbc.getInstance();
		MiJdbc i2 = MiJdbc.getInstance();
		assertEquals(i1,i2);

		MiJdbc i3 = MiJdbc.getInstance();
		assertEquals(i2,i3);
	}
	
	@Test
	public void testQuery()
	{
		MiJdbc jdbc = MiJdbc.getInstance();

		String sql = "";
		sql+="SELECT COUNT(*) FROM Categoria ";
		List<Object[]> x = jdbc.query(sql);

		// verifico que haya traido 1 fila, 1 columna
		assertEquals(x.size(),1);
		Object fila[] = x.get(0);
		assertEquals(fila.length,1);
		
		long n = (Long)fila[0];
		
		sql = "";
		sql+="SELECT id_categoria,descripcion ";
		sql+="FROM Categoria ";
		x = jdbc.query(sql);
		
		// verifico que haya traido 3 filas
		assertEquals(x.size(),n);
		
		// verifico que las filas tienen dos columnas
		fila = x.get(0);
		assertEquals(fila.length,2);
	}
}
