import React, { useState } from 'react';

/*crear  componente en react MostrarLista ue diga El punto 1, El punto 2, El punto 3 con botones de añadir y borrar*/


function MostrarLista() {
    const [lista, setLista] = useState(["El punto 1", "El punto 2", "El punto 3"]);
    const [nuevo, setNuevo] = useState("");

    const handleChange = (e) => {
        setNuevo(e.target.value);
    }

    const handleClick = (e) => {

        setLista([...lista, nuevo]);
        setNuevo("");
    }

    const handleDelete = (e) => {
        setLista(lista.filter((item, index) => index !== e));
    }

    return (
        <div>
            <input type="text" value={nuevo} onChange={handleChange} />
            <button onClick={handleClick}>Añadir</button>

            <ul>

                {lista.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => handleDelete(index)}>Borrar</button>

                    </li>
                ))}
            </ul>
        </div>
    );





}





export default MostrarLista;
