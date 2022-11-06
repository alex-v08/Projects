package sort;

import java.util.Comparator;

public class ComparatorIntAscImple implements Comparator<Integer>
{
	@Override
	public int compare(Integer a, Integer b)
	{
		return a-b;
	}
}
