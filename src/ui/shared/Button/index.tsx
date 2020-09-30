import React from 'react'
import './Button.css'

interface IButtonProps {
  text: string
  onClick: (options: any) => any
  disabled: boolean
}

const Button:React.FC<IButtonProps> = ({text, onClick, disabled}) => {
  const className = 'button ' + (disabled ? 'disabled' : '')
  const clickFunc = !disabled ? onClick : () => null
  
  return (
    <div
      className={className}
      onClick={clickFunc}
    >
      {text}
    </div>
  )
}

export default Button