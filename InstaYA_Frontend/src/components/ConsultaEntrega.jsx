import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const getEntregasUsuario = () =>{
  return [
    {
      orden: "1234",
      fecha: "01/01/2022",
      ciudadEntrega: "Bogotá",
      direccionEntrega: "Calle falsa # 1 -23",
      estado: "Guardado"
    },
    {
      orden: "4567",
      fecha: "01/09/2021",
      ciudadEntrega: "Cali",
      direccionEntrega: "Calle 8 # 1 -23",
      estado: "Cancelado"
    },
    {
      orden: "7536",
      fecha: "01/03/2021",
      ciudadEntrega: "Barranquilla",
      direccionEntrega: "Calle 32 # 1 -23",
      estado: "Cumplido"
    }
  ];
};

export const ConsultaEntrega = () => {

  const [entregasUsuario, setEntregasUsuario] = useState([]);

  useEffect(() =>{
    setEntregasUsuario(
      ...entregasUsuario, getEntregasUsuario()
    );    

  }, []);

  return (
    <>
      <table className='table'>
        <thead className='border border-danger'>
          <tr>
            <td className='col'>Orden</td>
            <td className='col'>Fecha</td>
            <td className='col'>Ciudad Entrega</td>
            <td className='col'>Dirección Entrega</td>
            <td className='col'>Estado</td>
          </tr>
        </thead>
        <tbody>
          {entregasUsuario.map((entrega) => (
            <tr key={entrega.orden}>
              
              <td>
                <Link to={'/cambiar_entrega'} state={{ordenEntrega: entrega.orden}} >
                  {entrega.orden}
                </Link>
              </td>
              <td>{entrega.fecha}</td>
              <td>{entrega.ciudadEntrega}</td>
              <td>{entrega.direccionEntrega}</td>
              <td>{entrega.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <Link to={'/bandeja_inicio'}>
        <Button name='<<< Volver'></Button>
      </Link>
      
    </>
  )
}
