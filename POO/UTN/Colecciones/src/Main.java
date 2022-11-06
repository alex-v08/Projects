import java.util.Collections;

public class Main {
    public static void main(String[] args) {
/*        El puerto de Buenos Aires necesita administrar los contenedores que ingresan día a día.
        Estos poseen un número que los identifica, un texto que describe el país de procedencia
        (China, EEUU, Brasil, Rusia, Canadá, Desconocida) y una marca que indica si transporta
        materiales peligrosos.
        El sistema debe permitir que el puerto pueda ingresar contenedores, mostrarlos
        ordenados de acuerdo al número que los identifica y poder calcular la cantidad de
        contenedores peligrosos cuya procedencia sea “Desconocida”. */


        Contenedor c1 = new Contenedor(646, "China", true);
        Contenedor c2 = new Contenedor(6612, "Desconocida", true);
        Contenedor c3 = new Contenedor(463, "Desconocida", true);

        Puerto p1 = new Puerto();
        p1.nuevoContenedor(c1);
        p1.nuevoContenedor(c2);
        p1.nuevoContenedor(c3);

        Collections.sort();
        p1.mostrarContenedores();

        System.out.println(p1.contenedoresPeligrosos());


    }
}