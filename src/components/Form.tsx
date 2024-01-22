"use client"
import React, { useState } from 'react';

import Button from './Button';
import Input from './Input';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';

const Form = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const shortenUrl = () => {
    setShortUrl(url);
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-3 justify-center">
        <Input url={url} handleChangeUrl={setUrl} />
        <Button disabled={!url.length} handleChangeClick={shortenUrl} />
      </div>
      {
        url.length > 0 && shortUrl.length > 0 &&
        <div className="bg-[#ffffff54] mt-3 flex justify-between p-2">
          {shortUrl}
          <DocumentDuplicateIcon className="h-6 w-6 cursor-pointer text-gray-800" />
        </div>
      }

    </div>

  )
}

export default Form
