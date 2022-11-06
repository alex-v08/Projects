package trabajoPractico.com;

import java.util.ArrayList;
import java.util.Comparator;

public interface Sorter extends Comparator<Sorter>{
    public <T> void sort(T arr[],Comparator<T> c);
}


