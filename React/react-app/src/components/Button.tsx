import React, { ReactNode } from 'react'

interface Props{
    children: ReactNode 
    onselect: ()=> void
}

const Button = ({children,onselect}: Props) => {
  return (
    <button className='btn btn-primary mt-3' onClick={onselect}> {children}</button>
  )
}

export default Button