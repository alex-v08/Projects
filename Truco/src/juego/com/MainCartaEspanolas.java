package juego.com;

public class MainCartaEspanolas {
    public static void main(String[] args) {
        MazoEspanola mazo = MazoEspanola.getMazo();

        MazoEspanola mazo2 = MazoEspanola.getMazo(); //Singleton test

        System.out.println(mazo.hashCode() == mazo2.hashCode()); //Comprueba que el mazo es el mismo


        mazo.barajar();
        System.out.println("Jugador 1");
        for (int i = 1; i <= 6; i++) {
            System.out.printf("%-20s", mazo.repartirCarta());
            if (i % 3 == 0) {
                System.out.println("");
            }
        }
    }

}

