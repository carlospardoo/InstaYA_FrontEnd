import React from 'react'
import { useState } from 'react';
import { TextLabel } from './TextLabel';
import { SubmitButton } from './SubmitButton';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

export const ActualizaEntrega = () => {

  const location = useLocation();
  // const {ordenEntrega} = location.state;

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

  const [ordenEntrega, setOrdenEntrega] = useState("");

  useEffect( () =>{
 
    const {ordenEntrega} = location.state;
    setOrdenEntrega(ordenEntrega);

    const consutaEntrega = async () =>{

      const requestParams = new URLSearchParams([['id', ordenEntrega]]);

      await axios({
        url: 'http://127.0.0.1:9000/delivery/get_delivery_id',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'http://127.0.0.1:9000'
        },
        params: requestParams
      })
      .then( data =>{
        if(data.data != null && data.data != undefined){
          const fechaFormato = new Date(data.data.pickup_date);
          setFormEntrega({
            fechaRecogida: fechaFormato.getFullYear()+"-"+("0"+fechaFormato.getMonth()).slice(-2)+"-"+("0"+fechaFormato.getDate()).slice(-2),
            horaRecogida: data.data.pickup_time,
            alto: data.data.box_height,
            ancho: data.data.box_width,
            largo: data.data.box_depth,
            ciudadRecogida: data.data.pickup_city,
            direccionRecogida: data.data.pickup_address,
            ciudadEntrega: data.data.delivery_city,
            direccionEntrega: data.data.delivery_address,
            identificacionDestinatario: data.data.adressee_document,
            nombreDestinatario: data.data.addessee_name
          });
        }
      })
    };

    consutaEntrega();

  }, []);

  const handlerInputChange = (e) =>{
    setFormEntrega({
      ...formEntrega, [e.target.name]: e.target.value 
    });
  };

  const actualizacionEntrega = (e) =>{

    e.preventDefault();

    const bodyMapper = JSON.stringify({
      orden_entrega: ordenEntrega,
      fechaRecogida: formEntrega.fechaRecogida,
      horaRecogida: formEntrega.horaRecogida,
      alto: formEntrega.alto,
      ancho: formEntrega.ancho,
      largo: formEntrega.largo,
      ciudadRecogida: formEntrega.ciudadRecogida,
      direccionRecogida: formEntrega.direccionRecogida,
      ciudadEntrega: formEntrega.ciudadEntrega,
      direccionEntrega: formEntrega.direccionEntrega,
      identificacionDestinatario: formEntrega.identificacionDestinatario,
      nombreDestinatario: formEntrega.nombreDestinatario
    });

    axios({
      url: 'http://127.0.0.1:9000/delivery/update_delivery',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:9000'
      },
      data: bodyMapper
    })
    .then(data =>{

        if(data.data.result.modifiedCount == 1)
          alert(data.data.message);
        else
          alert("Actualización fallida");
    });

  };

  return (
    <>
      <h1 className='card-title m-5 text-center' >Cambiar Entrega</h1>

      <form onSubmit={actualizacionEntrega}  className='m-5 abs-center' >

        <label className='col-sm-4 col-form-label' >Orden de Entrega </label>
        <span className='col-sm-4 col-form-label fw-bold' >{ordenEntrega}</span>
        <br />

        <label className='fs-5 fw-bold' >Dimensiones (centímetros)</label>
        <TextLabel inputType={'number'} lblText='Alto' txtName={'alto'} txtPlaceholder='Escriba el alto del paquete' txtOnChange={handlerInputChange} txtValue={formEntrega.alto} />
        <TextLabel inputType={'number'} lblText='Ancho' txtName={'ancho'} txtPlaceholder='Escriba el ancho del paquete' txtOnChange={handlerInputChange} txtValue={formEntrega.ancho} />
        <TextLabel inputType={'number'} lblText='Largo' txtName={'largo'} txtPlaceholder='Escriba el largo del paquete' txtOnChange={handlerInputChange} txtValue={formEntrega.largo} />
        <hr />
        <TextLabel inputType={'date'} lblText='Fecha Recogida' txtName={'fechaRecogida'} txtOnChange={handlerInputChange} txtValue={formEntrega.fechaRecogida} />
        <TextLabel inputType={'time'} lblText='Hora Recogida' txtName={'horaRecogida'} txtOnChange={handlerInputChange} txtValue={formEntrega.horaRecogida} />
        <TextLabel inputType={'text'} lblText='Ciudad Recogida' txtName={'ciudadRecogida'} txtPlaceholder='Escriba su ciudad' txtOnChange={handlerInputChange} txtValue={formEntrega.ciudadRecogida} />
        <TextLabel inputType={'text'} lblText='Dirección Recogida' txtName={'direccionRecogida'} txtPlaceholder='Escriba su dirección' txtOnChange={handlerInputChange} txtValue={formEntrega.direccionRecogida} />
        <TextLabel inputType={'text'} lblText='Ciudad Entrega' txtName={'ciudadEntrega'} txtPlaceholder='Escriba la ciudad de entrega' txtOnChange={handlerInputChange} txtValue={formEntrega.ciudadEntrega} />
        <TextLabel inputType={'text'} lblText='Dirección Entrega' txtName={'direccionEntrega'} txtPlaceholder='Escriba la dirección de entrega' txtOnChange={handlerInputChange} txtValue={formEntrega.direccionEntrega} />
        <TextLabel inputType={'text'} lblText='Identificación Destinatario' txtName={'identificacionDestinatario'} txtPlaceholder='Escriba el documento de quien recibe el paquete' txtOnChange={handlerInputChange} txtValue={formEntrega.identificacionDestinatario} />
        <TextLabel inputType={'text'} lblText='Nombre Completo Destinatario' txtName={'nombreDestinatario'} txtPlaceholder='Escriba el nombre de quien recibe el paquete' txtOnChange={handlerInputChange} txtValue={formEntrega.nombreDestinatario} />

        <SubmitButton name={"Cambiar Entrega"}></SubmitButton>

        <Link to={'/mis_entregas'}>
          <Button name={"<<< Volver"}></Button>
        </Link>

      </form>

    </>
  )
}
