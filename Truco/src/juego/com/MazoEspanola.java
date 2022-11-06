package juego.com;

public class MazoEspanola {
    private static MazoEspanola mazo;
    private Carta[] cartas;
    private int numCartas;
    private int numCartasUsadas;
    private static final int NUM_CARTAS = 40;
    private static final int NUM_PALOS = 4;
    private static final int NUM_VALORES = 10;
    private static final String[] PALOS = {"Oros", "Copas", "Espadas", "Bastos"};
    private static final String[] VALORES = {"As", "Dos", "Tres", "Cuatro", "Cinco", "Seis", "Siete", "Sota", "Caballo", "Rey"};

    private MazoEspanola() {
        cartas = new Carta[NUM_CARTAS];
        numCartas = 0;
        for (int palo = 0; palo < NUM_PALOS; palo++) {
            for (int valor = 0; valor < NUM_VALORES; valor++) {
                cartas[numCartas] = new Carta(VALORES[valor], PALOS[palo]);
                numCartas++;
            }
        }
        numCartasUsadas = 0;
    }

    //Singleton
    public static MazoEspanola getMazo() {
        if (mazo == null) {
            mazo = new MazoEspanola();
        }
        return mazo;
    }

    public void barajar() {
        for (int i = numCartas - 1; i > 0; i--) {
            int rand = (int) (Math.random() * (i + 1));
            Carta temp = cartas[i];
            cartas[i] = cartas[rand];
            cartas[rand] = temp;
        }
        numCartasUsadas = 0;
    }

    public Carta repartirCarta() {
        if (numCartasUsadas == numCartas) {
            barajar();
        }
        numCartasUsadas++;
        return cartas[numCartasUsadas - 1];
    }

    public int cartasRestantes() {
        return numCartas - numCartasUsadas;
    }

    //Ordenar lista

    public void Ordenar (){


    }

}