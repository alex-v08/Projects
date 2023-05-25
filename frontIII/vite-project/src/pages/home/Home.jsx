import React from "react";
import imgPizza from "../assets/pizza.jpg";
import Card from "../../Components/Card";


const Home = () => {
  let pizzas = [
    {
      id: 1,
      name: "Muzzarella",
      description: "Pizza de muzzarella",
      price: 500,
      img: imgPizza,
    },
    {
      id: 2,
      name: "Napolitana",
      description: "Pizza de muzzarella, tomate y ajo",
      price: 600,
      img: "https://i0.wp.com/osojimix.com/wp-content/uploads/2022/06/Para-la-masa-de-pizza-napolitana-8-hrs-fermentacion-Web-1.jpg?resize=300%2C300&ssl=1",
    },
    {
      id: 3,
      name: "Fugazzeta",
      description: "Pizza de muzzarella y cebolla",
      price: 700,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG/800px-Fugazzeta_en_pizzeria_Guerrin%2C_Buenos_Aires.JPG",
    },
    {
      id: 4,
      name: "Calabresa",

      description: "Pizza de muzzarella y salame",

      price: 800,
      img: "https://www.recetas-argentinas.com/base/stock/Recipe/43-image/43-image_web.jpg",
    },
  ]
  return (
    <>
  <div>
    <h1>Lista de Pizzas</h1>
    {pizzas.map(pizza=> <Card item={pizza} />)}
  </div>
  </>

  );
}

export default Home;
