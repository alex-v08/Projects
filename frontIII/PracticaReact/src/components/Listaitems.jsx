/* 
//esLint-disable react/prop-types
import React from 'react'

const Listaitems = ({items}) => {
    return (
        <div style={{
            border: '1px solid black',
            padding: '1rem',
            margin: '1rem',
            width: '50%',
            textAlign: 'left',
            backgroundColor: 'lightblue'
            

        }}>
            <ul>
               
                {items.map((item) => (
                    <li style={{
                        listStyle: 'none'
                    }} key={item.id}>{item.nombre} {item.apellido} {item.edad}</li>
                ))}
            </ul>
        </div>
    )
}



export default Listaitems */