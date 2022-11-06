package sort;

public class DemoSortUtil
{
	public static void main(String[] args)
	{
		Integer miArray[] = {5,1,3,2,9,6,8,7};
		ComparatorIntAscImple c1 = new ComparatorIntAscImple();
		SortUtil.sort(miArray,c1);
		for(int w:miArray)
		{
			System.out.println(c1);
		}
		
		System.out.println("---");
		
		ComparatorIntDescImple c2 = new ComparatorIntDescImple();
		SortUtil.sort(miArray,c2);
		for(int w:miArray)
		{
			System.out.println(w);
		}
		
		String miArray2[] = {"Pablo","Carlos","Juan","Anastasio","Octaviano","Ximena"};
		ComparatorStringAscImple c3 = new ComparatorStringAscImple();
		SortUtil.sort(miArray2,c3);
		for(String w:miArray2)
		{
			System.out.println(w);
		}
		
		System.out.println("---");
		
		ComparatorStringAscLongitudImple c4 = new ComparatorStringAscLongitudImple();
		SortUtil.sort(miArray2,c4);
		for(String w:miArray2)
		{
			System.out.println(w);
		}
		
		System.out.println("---");
		
	}
}
