package demo;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class MiJdbc
{
	private static MiJdbc instancia = null;
	private Connection con = null;
	
	private MiJdbc()
	{
	}
	
	public void disconnect()
	{
		try
		{
			if( con!=null ) con.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
			throw new RuntimeException(e);
		}
	}
	
	public List<Object[]> query(String sql,Object ...params)
	{
		PreparedStatement pstm = null;
		ResultSet rs = null;
		
		try
		{
			// preparo la sentencia
			pstm = con.prepareStatement(sql);

			// seteo los parametros
			for(int i=0; i<params.length;i++)
			{
				pstm.setObject(i+1,params[i]);
			}

			// ejecuto el query
			rs = pstm.executeQuery();
			
			// metadata
			ResultSetMetaData rsmd = rs.getMetaData();
			int columnCount = rsmd.getColumnCount();

			// recorro el ResultSet y cargo los datos
			List<Object[]> ret = new ArrayList<>();
			while( rs.next() )
			{
				Object[] fila = new Object[columnCount];
				for(int i=0;i<columnCount;i++)
				{
					fila[i] = rs.getObject(i+1);
				}
				ret.add(fila);
			}			
			
			return ret;
		}
		catch(Exception e)
		{
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		finally
		{
			try
			{
				if( rs!=null ) rs.close();
				if( pstm!=null ) pstm.close();
			}
			catch(Exception e2)
			{
				e2.printStackTrace();
				throw new RuntimeException(e2);
			}
		}		
	}

	public static MiJdbc getInstance()
	{
		FileInputStream fis = null;
		
		try
		{
			if( instancia==null )
			{
				instancia = new MiJdbc();
				
				// me preparo para leer las propiedades
				Properties props = new Properties();
				fis = new FileInputStream("MiJdbc.properties");
				props.load(fis);
				
				String url = props.getProperty("url");
				String driver = props.getProperty("driver");
				String usr = props.getProperty("usr");
				String pwd = props.getProperty("pwd");
				
				// levanto el driver
				Class.forName(driver);
				
				// Me conecto!
				instancia.con = DriverManager.getConnection(url,usr,pwd);
			}
			
			return instancia;			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			throw new RuntimeException(e);
		}
		finally
		{
			try
			{
				if( fis!=null ) fis.close();
			}
			catch(Exception e2)
			{
				e2.printStackTrace();
				throw new RuntimeException(e2);
			}
		}
	}
	
	// insert, update y delete
	public int update(String sql,Object ...params)
	{
		return 0;
	}
}
