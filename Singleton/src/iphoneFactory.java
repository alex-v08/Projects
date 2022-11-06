


public class iphoneFactory {
    private static iphoneFactory instance = null;
    private iphoneFactory() {
    }
    public static iphoneFactory getInstance() {
        if (instance == null) {
            instance = new iphoneFactory();
        }
        return instance;
    }

    public iphoneFactory crearIphone(String modelo) {
        switch (modelo) {
            case "iphone 5":
                return new iphone5();
            case "iphone 6":
                return new iphone6();
            case "iphone 7":
                return new iphone7();
            default:
                return null;
        }
    }



}
