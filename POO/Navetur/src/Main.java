public class Main {

    public static void main(String[] args) {
        Capitan c1=new Capitan("Matias","Leon","RE2");
        Capitan c2=new Capitan("Ivan","Gomez","RE3");
        Yate y1=new Yate(c1,10.5,10.0,2021,10.0,6);
        Yate y2=new Yate(c2,10.8,5.0,2019,9.0,3);

        int test;

        test = y1.compareTo(y2);

        if(test == 1){
            System.out.println("El yate de "+ y1.capitan.getNombre()+" es más lujoso que el yate de " + y2.capitan.getNombre());
        }

    }
}
