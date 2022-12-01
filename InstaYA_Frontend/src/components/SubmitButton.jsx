import React from 'react'

export const SubmitButton = ({
    name
}) => {
  return (
    <button type='submit' className='btn btn-danger m-1' >{name}</button>
  )
}
