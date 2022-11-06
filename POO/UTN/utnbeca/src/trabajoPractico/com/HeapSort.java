package trabajoPractico.com;

import java.util.Comparator;

public class HeapSort implements Sorter{

    // HeapSort, a sorting algorithm
    // pre: 0 <= n <= a.length
    // post: values in a[0]...a[n-1] are in ascending order
    public static <T> void sort(T[] a, int n, Comparator<T> c) {

        // convert a to heap
        for (int index = n / 2 - 1; index >= 0; index--) {
            // assert: a[(index+1)*2..n] is a heap
            fixHeap(a, index, n, c);
            // assert: a[index..n] is a heap
        }

        // sort the heap
        for (int index = n - 1; index >= 1; index--) {
            // assert: a[0..index] is sorted
            swapReferences(a, 0, index);
            // assert: a[index..n-1] > a[index-1]
            fixHeap(a, 0, index, c);
            // assert: a[0..index-1] is a heap
        }

    }

    private static void swapReferences(T[] a, int i, int index) {

    }

    private static <T> void fixHeap(T[] a, int index, int n, Comparator<T> c) {
    }

    @Override
    public <T> void sort(T[] arr, Comparator<T> c) {

    }

    @Override
    public int compare(Sorter o1, Sorter o2) {
        return 0;
    }
}
