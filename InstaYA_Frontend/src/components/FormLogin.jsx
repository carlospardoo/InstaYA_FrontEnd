import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { TextLabel } from './TextLabel';
import { SubmitButton } from './SubmitButton';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios' ;

import { UserContext } from './UserContext';

export const FormLogin = () => {

    const [formLogin, setLoginUser] = useState({
        usuario: "",
        password: ""
    });

    const navigate = useNavigate();

    const {user, setUser} = useContext(UserContext);

    const handlerInputChange = (e) =>{
        setLoginUser({
            ...formLogin, [e.target.name]: e.target.value
        });
    };

    const validarLogin = async (e) =>{
        e.preventDefault();

        // const datos = new FormData(e.target);
        // const formProps = Object.fromEntries(datos);
        // const usuario = formProps['txtUsuario'];
        // const passwordData = formProps['txtPassword'];
        // console.log(datos);
        // console.log(formProps);

        const bodyMapper = JSON.stringify({
            username: formLogin.usuario, 
            password: formLogin.password
        });
        
        /*PETICION BACKEND*/
        
        const axiosConfig = {
            method: 'POST',
            url: 'http://127.0.0.1:9000/user/login',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            data: bodyMapper
        };

        axios(axiosConfig)
        .then( res =>{
            if(res.status == 200 && res.data?.message == "Login exitoso"){
                setUser({
                    id: res.data?.user?._id,
                    username: res.data?.user?.username,
                    name: res.data?.user?.name
                });
                navigate('/bandeja_inicio');
            }                
            else{
                alert(err);
            }                
        })
        .catch( err =>{
            alert("Error: "+err);
        });
        

        

        // const peticion = await fetch('http://127.0.0.1:9000/user/login', {
        //     method: 'POST',
        //     headers: { 
        //         'Content-Type': 'application/json',
        //         'Access-Control-Allow-Origin': '*'
        //     },
        //     body: bodyMapper
        // });

        // const respuesta = peticion.json();
        // console.log(respuesta);

        // if(formProps['txtUsuario'] === 'hola' && formProps['txtPassword'] === '123' ){
        //     navigate('/bandeja_inicio');
        //     setUser(formProps['txtUsuario']);
        // }

    };

    return (
    <>
    <form className='m-5 abs-center' onSubmit={validarLogin} >
        <TextLabel txtName={"usuario"} lblText={"Usuario"} txtPlaceholder={"Escriba su usuario"} inputType={"text"} txtOnChange={handlerInputChange} />
        <TextLabel txtName={"password"} lblText={"Contraseña"} txtPlaceholder={""} inputType={"password"} txtOnChange={handlerInputChange} />
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
