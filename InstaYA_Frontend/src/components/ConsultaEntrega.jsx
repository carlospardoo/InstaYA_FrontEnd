import axios from 'axios';
import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { UserContext } from './UserContext';

export const ConsultaEntrega = () => {

  const [entregasUsuario, setEntregasUsuario] = useState([
    // {
    //   orden: null,
    //   fecha: "",
    //   ciudadEntrega: "",
    //   direccionEntrega: "",
    //   estado: ""
    // }
  ]);

  const {user, setUser} = useContext(UserContext);

  const getEntregasUsuario2 = async () =>{
    const entregas = [];
    // return [
    //   {
    //     orden: "1234",
    //     fecha: "01/01/2022",
    //     ciudadEntrega: "Bogotá",
    //     direccionEntrega: "Calle falsa # 1 -23",
    //     estado: "Guardado"
    //   },
    //   {
    //     orden: "4567",
    //     fecha: "01/09/2021",
    //     ciudadEntrega: "Cali",
    //     direccionEntrega: "Calle 8 # 1 -23",
    //     estado: "Cancelado"
    //   },
    //   {
    //     orden: "7536",
    //     fecha: "01/03/2021",
    //     ciudadEntrega: "Barranquilla",
    //     direccionEntrega: "Calle 32 # 1 -23",
    //     estado: "Cumplido"
    //   }
    // ];
    
    const parameters = new URLSearchParams([['id', user.id]]);
    const request = await axios({
      url: 'http://127.0.0.1:9000/delivery/get_delivery',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:9000'
      },
      params: parameters
    });

    return request;
  
  };

  useEffect(() =>{

    let entregas = [];
    const parameters = new URLSearchParams([['id', user.id]]);

    const getEntregasUsuario = async () =>{
      let entregasInterna = [];
      // entregasInterna = await axios({
      //   url: 'http://127.0.0.1:9000/delivery/get_delivery',
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': 'http://127.0.0.1:9000'
      //   },
      //   params: parameters
      // })
      // .then(res =>{
      //   let resultados = [];
      //   // console.log(res.data);
      //   resultados = res.data.length > 0 ? res.data: [];
      //   resultados.forEach( x => {
      //     entregasInterna.push({
      //       orden: x._id ,
      //       fecha: x.pickup_date,
      //       ciudadEntrega: x.delivery_city,
      //       direccionEntrega: x.delivery_address,
      //       estado: x.state
      //     });
      //   });
      // })
      // .catch(err => alert("Error: "+err));

      // const request = await axios({
      //     url: 'http://127.0.0.1:9000/delivery/get_delivery',
      //     method: 'GET',
      //     headers: {
      //       'Content-Type': 'application/json',
      //       'Access-Control-Allow-Origin': 'http://127.0.0.1:9000'
      //     },
      //     params: parameters
      //   });

      // const json = await request.json();

      // json.forEach(x => {
      //   setEntregasUsuario(
      //     [...entregasUsuario, {
      //             orden: x._id ,
      //             fecha: x.pickup_date,
      //             ciudadEntrega: x.delivery_city,
      //             direccionEntrega: x.delivery_address,
      //             estado: x.state
      //       }
      //     ]
      //   ); 
      // });
      let datosMapeados = [];
      entregasInterna = await getEntregasUsuario2().then( data =>{
        let dataReceived = [];
        dataReceived = data.data.length > 0 ? data.data : [];

        for(const entrega of dataReceived){
          const entregaMap = {
            orden: entrega._id ,
            fecha: entrega.pickup_date,
            ciudadEntrega: entrega.delivery_city,
            direccionEntrega: entrega.delivery_address,
            estado: entrega.state
          };
          datosMapeados = [...datosMapeados, entregaMap];
        }

        setEntregasUsuario(...entregasUsuario, datosMapeados);

        // dataReceived.foreach( entrega =>{
        //   const entregaMap = {
        //                 orden: entrega._id ,
        //                 fecha: entrega.pickup_date,
        //                 ciudadEntrega: entrega.delivery_city,
        //                 direccionEntrega: entrega.delivery_address,
        //                 estado: entrega.state
        //           };
        //   setEntregasUsuario(
        //       [...entregasUsuario, entregaMap]
        //     );
        // });
      });
      
      
    }

    getEntregasUsuario();

    // setEntregasUsuario(
    //   [...entregasUsuario, entregas]
    // );    

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
