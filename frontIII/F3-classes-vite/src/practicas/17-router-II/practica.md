# Practica clase 17!

### React Router con rutas dinamicas

### Ejercicio 1: useParams

Crea una web con lo siguientes
  
1. En el index se mostrara una lista de post traidos de aqui
    `https://jsonplaceholder.typicode.com/posts`

2. Cuando se clicka en un post, se redirigira la web a `/posts/:id`
  donde se mostrara el post con el id `:id` (traer la data de `https://jsonplaceholder.typicode.com/posts/:id`)
  
3. Un boton para ir hacia atras

---

### Ejercicio 2: useSearchParams

Crea una web que muestre una lista importada de [aqui](https://github.com/gabymorgi/F3-classes-vite/blob/main/src/fakeApi/games.json)

1. En el index se mostrara un formulario con los siguientes campos
  
Select de generos: `["Roguelike", "Platformer", "Action", "Adventure", "Puzzle", "Metroidvania", "Simulation", "Board", "Precision"]`
Min played Time
  
2. Guarde los datos del formulario en la url para no perder la seleccion al recargar

3. Con estos filtros se mostraran la seleccion de juegos correspondiente

4. Cada juego ira al onClick a un vista de detalle


**¿en que se diferencia el useParams de useSearchParams?**
