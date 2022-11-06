public class Main {
    public static void main(String[] args) {

        Figura[] figuras = new Figura[3];
        figuras[0] = new Circulo(1);
        figuras[1] = new Triangulo(5, 4);
        figuras[2] = new rectangulo(5, 10);

        FiguraCompuesta fc = new FiguraCompuesta();
        fc.addFigura(figuras[0]);
        fc.addFigura(figuras[1]);
        fc.addFigura(figuras[2]);

        System.out.println("Area de la figura compuesta: " + fc.calcularArea());



    }
}