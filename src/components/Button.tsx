"use client"
import React from 'react'

interface Props {
  disabled: boolean;
  handleChangeClick: () => void;
}

const Button = ({ disabled, handleChangeClick }: Props) => {
  return (
    <button onClick={handleChangeClick} disabled={disabled} className="bg-[#ffffff54] text-white p-4">SHORTEN</button>
  )
}

export default Button
