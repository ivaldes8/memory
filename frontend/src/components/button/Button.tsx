import React from 'react'
import './Button.css'

interface Props {
  nativeType?: 'button' | 'reset' | 'submit';
  rounded?: Boolean;
  type?: 'primary' | 'secundary' | 'danger' | 'warning' | 'info';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode
}

const Button: React.FC<Props> = ({ nativeType = 'button', rounded = false, type = 'primary', children, onClick }) => {
  return (
    <button style={{ backgroundColor: `var(--${type})`, borderRadius: rounded ? '50px' : '', color: type === 'secundary' ? 'var(--primary)': '', border:  type === 'secundary' ? '1px solid' : '' }} onClick={onClick} type={nativeType}>
      {children}
    </button>
  )
}

export default Button