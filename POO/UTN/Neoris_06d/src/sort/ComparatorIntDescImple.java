package sort;

import java.util.Comparator;

public class ComparatorIntDescImple implements Comparator<Integer>
{
	@Override
	public int compare(Integer a, Integer b)
	{
		return b-a;
	}
}
