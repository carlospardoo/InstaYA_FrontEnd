import React from 'react'
import { useContext } from 'react';
import { TextLabel } from './TextLabel';
import { SubmitButton } from './SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios' ;

import { UserContext } from './UserContext';

export const FormLogin = () => {

    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);

    const validarLogin = (e) =>{
        e.preventDefault();
        // alert("Validación del login");
        const datos = new FormData(e.target);
        const formProps = Object.fromEntries(datos);
        // console.log(datos);
        // console.log(formProps);
        
        /* --PETICION BACKEND
        const usuario = formProps['txtUsuario'];
        const passwordData = formProps['txtPassword'];
        console.log(usuario+", "+passwordData);
        const datosSend = JSON.stringify({
            username: formProps['txtUsuario'].toString(), 
            password: formProps['txtPassword'].toString()
        });

        const axiosConfig = {
            method: 'GET',
            url: 'http://127.0.0.1:9000/user/get_user',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            data: datosSend
        };

        axios(axiosConfig)
        .then( res =>{
            console.log(res)
            if(res.response.status == 200){
                setUser(formProps['txtUsuario']);
                navigate('/bandeja_inicio');
            }                
            else{
                alert(err);
                console.error(err);
            }                
        })
        .catch( err =>{
            alert("Error: "+err);
        });
        */

        if(formProps['txtUsuario'] === 'hola' && formProps['txtPassword'] === '123' ){
            navigate('/bandeja_inicio');
            setUser(formProps['txtUsuario']);
        }

    };

    return (
    <>
    <form className='m-5 abs-center' onSubmit={validarLogin} >
        <TextLabel txtName={"txtUsuario"} lblText={"Usuario"} txtPlaceholder={"Escriba su usuario"} inputType={"text"} />
        <TextLabel txtName={"txtPassword"} lblText={"Contraseña"} txtPlaceholder={""} inputType={"password"} />
        <SubmitButton name={"Login"} />

        <p> ¿No tienes cuenta?  
            <Link to="/registro">
                <span className='ms-1' >Registrarse</span> 
            </Link>
        </p>

    </form>
    </>
    )
}
