import React from 'react'

const handlerDefault = (e) => e.preventDefault;

export const Button = ({
    name = "", 
    handler = handlerDefault
}) => {

    

  return (
    <button className='btn btn-danger m-1' onClick={handler} >{name}</button>
  )
}
