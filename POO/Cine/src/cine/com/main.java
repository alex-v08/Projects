package cine.com;

public class main {

        public static void main(String[] args) {
            Cine cine1 = new Cine("Cinepolis", "Av. 5 de Mayo", "1000");
            Cine cine2 = new Cine("Cinemex", "Av. 7 de Mayo", "1001");

            Largometraje largo1 = new Largometraje("Titanic", "ATP", 120, "1997", "James Cameron", cine1, "Romance", 5);
            Largometraje largo2 = new Largometraje("El Padrino", "MAyores 18", 120, "1972", "Francis Ford Coppola", cine2, "Drama", 3);


            Cortos corto1 = new Cortos("El gato con botas", "ATP", 120, "1997", "Shrek", cine1, true);
            Cortos corto2 = new Cortos("El gato sin botas", "+18", 120, "1999", "Tarantino", cine1, false);

            System.out.println(corto1.queOrigen());

            if (largo1.compareTo(largo2) == 1){
                System.out.println("El largo 1 tiene mas actores que el largo 2");
            }else if (largo1.compareTo(largo2) == -1){
                System.out.println("El largo 2 tiene mas actores que el largo 1");
            }else{
                System.out.println("Los largos tienen la misma cantidad de actores");

            }
        }






}
