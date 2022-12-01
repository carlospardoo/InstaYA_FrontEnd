import React from 'react'
import { TextLabel } from './TextLabel';
import { SubmitButton } from './SubmitButton';
import { Button } from './Button';
import {Link} from 'react-router-dom'

export const Registro = () => {

  const registroUsuario = (e) =>{
    e.preventDefault();
  };

  return (
    <>

      <h1 className='card-title' >Registrarse</h1>

      <form className='m-5 abs-center' onSubmit={registroUsuario}>
        <TextLabel txtName={"txtNombre"} lblText={"Nombre"} txtPlaceholder={"Escriba su nombre"} inputType={"text"} />
        <TextLabel txtName={"txtUsuario"} lblText={"Usuario"} txtPlaceholder={"Escriba su usuario"} inputType={"text"} />
        <TextLabel txtName={"txtEmail"} lblText={"Correo"} txtPlaceholder={"Escriba su correo"} inputType={"email"} />
        <TextLabel txtName={"txtPassword"} lblText={"Contraseña"} txtPlaceholder={""} inputType={"password"} />
        <TextLabel txtName={"txtPasswordRepeat"} lblText={"Repetir Contraseña"} txtPlaceholder={""} inputType={"password"} />
        <SubmitButton name={"Registrarse"} />

        <Link to="/">
          {/* <button className='btn btn-danger m-1' >{"<<< Volver"}</button> */}
          <Button name={"<<< Volver"}></Button>
        </Link>
        
      </form>
    </>
  )
}
