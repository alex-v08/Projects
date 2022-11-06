package demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DBtest
{
	public static void main(String[] args)
	{
		Connection con = null;


        try
        {
            // 1 - parametros de la conexion
            String url="jdbc:hsqldb:hsql://localhost:9001/xdbcd";
            String driver="org.hsqldb.jdbcDriver";
            String usr="sa";
            String pwd="";

 
            Class.forName(driver);

  
            con = DriverManager.getConnection(url,usr,pwd);
            System.out.println("conecto!!");

           


        }
        catch(Exception e)
        {
        	 System.out.println("no Conecto!!");
        	e.printStackTrace();
            throw new RuntimeException(e);
        }
        finally
        {
    
            try
            {

                if(con!=null ) con.close();
            }
            catch(Exception e2)
            {
                e2.printStackTrace();
                throw new RuntimeException(e2);
            }
        }
    }
}
