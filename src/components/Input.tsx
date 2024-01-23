"use client"
import React, { useState } from 'react';

import { XCircleIcon } from '@heroicons/react/24/outline';

interface Props {
  url: string;
  handleChangeUrl: (url: string) => void;
}

const Input = ({ url, handleChangeUrl }: Props) => {
  return (
    <div className="flex items-center px-2 border-2 rounded-md w-full max-w-[1000px] bg-white drop-shadow-md">
      <input type="text" value={url} onChange={(event) => handleChangeUrl(event.target.value)} className="text-gray-900 border-0 w-full p-4 outline-none" placeholder="Enter your URL here" />
      {url.length > 0 && <XCircleIcon onClick={() => handleChangeUrl("")} className="h-8 w-8 text-gray-800 cursor-pointer" />}
    </div>
  )
}

export default Input
