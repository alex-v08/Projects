import React from "react";
import Form from "../Form/Form";
import "./Card.css";
import { useState } from 'react'




const Card = ({setCount}) => {

const [name, setName] = React.useState("");
const [lastname, setLastname] = React.useState("");
const [email, setEmail] = React.useState("");
const [password, setPassword] = React.useState("");
const [password2, setPassword2] = React.useState("");

const handleName = (e) => {
    setName(e.target.value);
};

const handleLastname = (e) => {
    setLastname(e.target.value);
};

const handleEmail = (e) => {
    setEmail(e.target.value);
};

const handlePassword = (e) => {
    setPassword(e.target.value);
};

const handlePassword2 = (e) => {
    setPassword2(e.target.value);
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, lastname, email, password, password2);
};


  
    return (
    <div className="card">
        <h1>Registro</h1>
       <Form />

    </div>
    );
};


export default Card;