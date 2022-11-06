public class Login {
    private String nombre;
    private String clave;

    private static Login lLogin;


    private Login() {

    }

    // Singleton
    public static Login getLogin() {
        if (lLogin == null) {
            lLogin = new Login();
        }
        return lLogin;
    }

    // Factory
    public static Login getLogin(String nombre, String clave) {
        if (lLogin == null) {
            lLogin = new Login();
        }
        lLogin.nombre = nombre;
        lLogin.clave = clave;
        return lLogin;
    }


}
