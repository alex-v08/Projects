package sort;

import java.util.Comparator;

public class ComparatorStringAscImple implements Comparator<String>
{
	@Override
	public int compare(String a,String b)
	{
		return a.compareTo(b);
	}
}
