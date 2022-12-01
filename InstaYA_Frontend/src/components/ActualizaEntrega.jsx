import React from 'react'
import { useState } from 'react';
import { TextLabel } from './TextLabel';
import { SubmitButton } from './SubmitButton';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const ActualizaEntrega = () => {

  const location = useLocation();
  const {ordenEntrega} = location.state;

  const [formEntrega, setFormEntrega] = useState({
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

  const handlerInputChange = (e) =>{
    setFormEntrega({
      ...formEntrega, [e.target.name]: e.target.value 
    });
  };

  const insercionEntrega = (e) =>{
    e.preventDefault();
  };

  return (
    <>
      <h1 className='card-title m-5 text-center' >Cambiar Entrega</h1>

      <form onSubmit={insercionEntrega}  className='m-5 abs-center' >

        <label className='col-sm-4 col-form-label' >Orden de Entrega </label>
        <span className='col-sm-4 col-form-label fw-bold' >{ordenEntrega}</span>
        <br />

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

        <SubmitButton name={"Cambiar Entrega"}></SubmitButton>

        <Link to={'/mis_entregas'}>
          <Button name={"<<< Volver"}></Button>
        </Link>

      </form>

    </>
  )
}
