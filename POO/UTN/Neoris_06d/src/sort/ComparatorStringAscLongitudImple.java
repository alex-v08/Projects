package sort;

import java.util.Comparator;

public class ComparatorStringAscLongitudImple implements Comparator<String>
{
	@Override
	public int compare(String a,String b)
	{
		int nA = a.length();
		int nB = b.length();
		
		if( nA==nB )
		{
			return a.compareTo(b);
		}
		else
		{
			return nA-nB;
		}
		
//		return nA==nB?a.compareTo(b):nA-nB;
	}
}
