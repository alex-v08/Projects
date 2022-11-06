package sort;

import java.util.Comparator;

public class DemoSortUtil
{
	public static void main(String[] args)
	{
		Integer miArray[] = {5,1,3,2,9,6,8,7};
		Comparator<Integer> c1 = (a,b)->a-b;
		SortUtil.sort(miArray,c1);
		for(int w:miArray)
		{
			System.out.println(w);
		}
		
		System.out.println("---");
		
		Comparator<Integer> c2 = (a,b)->{return b-a;};
		SortUtil.sort(miArray,c2);
		for(int w:miArray)
		{
			System.out.println(w);
		}
		
		String miArray2[] = {"Pablo","Carlos","Juan","Anastasio","Octaviano","Ximena"};
		Comparator<String> c3 = (a,b)->a.compareTo(b);
		SortUtil.sort(miArray2,c3);
		for(String w:miArray2)
		{
			System.out.println(w);
		}
//		
		System.out.println("---");
		
		Comparator<String> c4 = (a,b)->{return a.length()==b.length()?a.compareTo(b):a.length()-b.length();};
		SortUtil.sort(miArray2,c4);
		for(String w:miArray2)
		{
			System.out.println(w);
		}
		
		System.out.println("---");
		
	}
}
