import React from 'react'
import { useContext } from 'react'
import { TextLabel } from './TextLabel'
import { SubmitButton } from './SubmitButton'
import { Button } from './Button'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { UserContext } from './UserContext'

export const RegistroEntrega = () => {

  const [formEntrega, setFormEntrega] = useState({
    id: null,
    fechaRecogida: "",
    horaRecogida: "",
    alto: 0,
    ancho: 0,
    largo: 0,
    ciudadRecogida: "",
    direccionRecogida: "",
    ciudadEntrega: "",
    direccionEntrega: "",
    identificacionDestinatario: 0,
    nombreDestinatario: ""
  });

  const {user, setUser} = useContext(UserContext);

  useEffect(()=>{
    setFormEntrega({
      id: user.id
    });  
  }, []);
  
  const handlerInputChange = (e) =>{
    setFormEntrega({
      ...formEntrega, [e.target.name]: e.target.value 
    });
  };

  const insercionEntrega = (e) =>{
    e.preventDefault();

    axios({
      url: 'http://127.0.0.1:9000/delivery/add_delivery',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:9000'
      },
      data: JSON.stringify(formEntrega)
    })
    .then(res => alert(res.data.message) )
    .catch(err => alert(err.data.message));
    
  };

  return (

    <>
      <h1 className='card-title m-5 text-center' >Registro de Nueva Entrega</h1>

      <form onSubmit={insercionEntrega}  className='m-5 abs-center' >
        <label className='fs-5 fw-bold' >Dimensiones (centímetros)</label>
        <TextLabel inputType={'number'} lblText='Alto' txtName={'alto'} txtPlaceholder='Escriba el alto del paquete' txtOnChange={handlerInputChange} />
        <TextLabel inputType={'number'} lblText='Ancho' txtName={'ancho'} txtPlaceholder='Escriba el ancho del paquete' txtOnChange={handlerInputChange} />
        <TextLabel inputType={'number'} lblText='Largo' txtName={'largo'} txtPlaceholder='Escriba el largo del paquete' txtOnChange={handlerInputChange} />
        <hr />
        <TextLabel inputType={'date'} lblText='Fecha Recogida' txtName={'fechaRecogida'} txtOnChange={handlerInputChange} />
        <TextLabel inputType={'time'} lblText='Hora Recogida' txtName={'horaRecogida'} txtOnChange={handlerInputChange} />
        <TextLabel inputType={'text'} lblText='Ciudad Recogida' txtName={'ciudadRecogida'} txtPlaceholder='Escriba su ciudad' txtOnChange={handlerInputChange} />
        <TextLabel inputType={'text'} lblText='Dirección Recogida' txtName={'direccionRecogida'} txtPlaceholder='Escriba su dirección' txtOnChange={handlerInputChange} />
        <TextLabel inputType={'text'} lblText='Ciudad Entrega' txtName={'ciudadEntrega'} txtPlaceholder='Escriba la ciudad de entrega' txtOnChange={handlerInputChange} />
        <TextLabel inputType={'text'} lblText='Dirección Entrega' txtName={'direccionEntrega'} txtPlaceholder='Escriba la dirección de entrega' txtOnChange={handlerInputChange} />
        <TextLabel inputType={'text'} lblText='Identificación Destinatario' txtName={'identificacionDestinatario'} txtPlaceholder='Escriba el documento de quien recibe el paquete' txtOnChange={handlerInputChange} />
        <TextLabel inputType={'text'} lblText='Nombre Completo Destinatario' txtName={'nombreDestinatario'} txtPlaceholder='Escriba el nombre de quien recibe el paquete' txtOnChange={handlerInputChange} />

        <SubmitButton name={"Crear Entrega"}></SubmitButton>

        <Link to={'/bandeja_inicio'}>
          <Button name={"<<< Volver"}></Button>
        </Link>

      </form>

    </>
  )
}
