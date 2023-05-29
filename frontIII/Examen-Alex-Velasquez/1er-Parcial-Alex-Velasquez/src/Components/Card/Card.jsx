import React from "react";




const Card = () => {
  
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src="https://via.placeholder.com/150" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Nombre Apellido</h5>
            <p className="card-text">Email</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    );
};


export default Card;