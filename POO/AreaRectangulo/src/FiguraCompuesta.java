import java.util.ArrayList;
public class FiguraCompuesta extends Figura {
    private ArrayList<Figura> figuras;

    public FiguraCompuesta() {
        this.figuras = new ArrayList<>();
    }

    public void addFigura(Figura f) {
        this.figuras.add(f);
    }

    public void removeFigura(Figura f) {
        this.figuras.remove(f);
    }

    @Override
    public double calcularArea() {
        double area = 0;
        for (Figura f : figuras) {
            area += f.calcularArea();
        }
        return area;
    }
}


