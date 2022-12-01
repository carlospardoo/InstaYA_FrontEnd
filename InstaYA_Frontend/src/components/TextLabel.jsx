import React from 'react'

export const TextLabel = ({
    txtName,
    lblText,
    txtPlaceholder,
    inputType,
    txtOnChange
}) => {
  return (
    <div className='form-group row p-1'>
        <label className='col-sm-4 col-form-label' htmlFor={txtName}>{lblText} </label>
        <input type={inputType} name={txtName} placeholder={txtPlaceholder} className='col-sm-4' onChange={txtOnChange} />
    </div>
  )
}
