package trabajoPractico.com;

public class miFactory {

    private static String objName instance;

    public static Sorter getSorter(String tipo) {

        public static Object getInstance (String objName){
            Object obj = null;
            try {
                Class c = Class.forName(objName);
                obj = c.newInstance();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

