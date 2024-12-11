import React, { useEffect } from 'react'

const Button = ({label, disabled = false, type='button', onClick}) => {
  return (
    <button type={type} className='w-4/5 px-8 py-2 my-6 rounded bg-green-400 outline-none disabled:bg-blue-200' onClick={onClick} disabled={disabled}>
    {label}</button>
  )
}

export default Button
