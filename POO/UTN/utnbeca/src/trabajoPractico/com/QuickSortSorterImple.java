package trabajoPractico.com;

import java.util.Comparator;

public class QuickSortSorterImple implements Sorter{
    @Override
    public <T> void sort(T[] arr, Comparator<T> c) {
        //implementar quicksort

           QuickSort.sort(arr, c);

    }

    @Override
    public int compare(Sorter o1, Sorter o2) {
        //implementar quicksort

        return 0;
    }
}
