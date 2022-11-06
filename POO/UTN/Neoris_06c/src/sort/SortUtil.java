package sort;

import java.util.Comparator;

public class SortUtil
{
	public static <T> void sort(T arr[],Comparator<T> c)
	{
		for(int j=0;j<arr.length;j++)
		{
			for(int i=0;i<arr.length-1;i++)
			{
//				if(arr[i]>arr[i+1])
				if(c.compare(arr[i],arr[i+1])>0)
				{
					T aux = arr[i];
					arr[i] = arr[i+1];
					arr[i+1] = aux;
				}
			}
		}
	}
}
