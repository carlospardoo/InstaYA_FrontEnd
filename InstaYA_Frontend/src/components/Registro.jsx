import React from 'react'
import { TextLabel } from './TextLabel';
import { SubmitButton } from './SubmitButton';
import { Button } from './Button';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

export const Registro = () => {

  const [formRegistro, setFormRegistro] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    passwordRepeticion: ""
  });

  const registroUsuario = (e) =>{
    e.preventDefault();

    if(formRegistro.password !== formRegistro.passwordRepeticion){
      alert("Las contraseñas no coinciden");
      return;
    }

    axios({
      url: 'http://127.0.0.1:9000/user/register_user',
      method: 'POST',
      headers:{
        'Content-Type': 'application/json',
        'Access-Control-Allow_Origin': '127.0.0.1:9000'
      },
      data: JSON.stringify(formRegistro)
    })
    .then(res => {
      if(res.data.message == "Usuario registrado")
        alert("Usuario creado correctamente")
      else
        alert("Error al crear el usuario. "+res.data.message);
    })
    .catch(err => alert("Error: "+err));

  };

  const handlerInputChange = (e) =>{
    e.preventDefault();
    setFormRegistro({
      ...formRegistro, [e.target.name]: e.target.value
    });
  };

  return (
    <>

      <h1 className='card-title' >Registrarse</h1>

      <form className='m-5 abs-center' onSubmit={registroUsuario}>
        <TextLabel txtName={"name"} lblText={"Nombre"} txtPlaceholder={"Escriba su nombre"} inputType={"text"} txtOnChange={handlerInputChange} />
        <TextLabel txtName={"username"} lblText={"Usuario"} txtPlaceholder={"Escriba su usuario"} inputType={"text"} txtOnChange={handlerInputChange} />
        <TextLabel txtName={"email"} lblText={"Correo"} txtPlaceholder={"Escriba su correo"} inputType={"email"} txtOnChange={handlerInputChange} />
        <TextLabel txtName={"password"} lblText={"Contraseña"} txtPlaceholder={""} inputType={"password"} txtOnChange={handlerInputChange} />
        <TextLabel txtName={"passwordRepeticion"} lblText={"Repetir Contraseña"} txtPlaceholder={""} inputType={"password"} txtOnChange={handlerInputChange} />
        <SubmitButton name={"Registrarse"} />

        <Link to="/">
          {/* <button className='btn btn-danger m-1' >{"<<< Volver"}</button> */}
          <Button name={"<<< Volver"}></Button>
        </Link>
        
      </form>
    </>
  )
}
