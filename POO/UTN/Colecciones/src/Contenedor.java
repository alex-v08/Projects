public class Contenedor {
    private int id;
    private String procedencia;
    private boolean peligroso;

    public Contenedor(int id, String procedencia, boolean peligroso) {
        this.id = id;
        this.procedencia = procedencia;
        this.peligroso = peligroso;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getProcedencia() {
        return procedencia;
    }

    public void setProcedencia(String procedencia) {
        this.procedencia = procedencia;
    }

    public boolean isPeligroso() {
        return peligroso;
    }

    public void setPeligroso(boolean peligroso) {
        this.peligroso = peligroso;
    }
}
