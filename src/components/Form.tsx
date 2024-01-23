"use client"
import React, { useState } from 'react';

import Button from './Button';
import Input from './Input';
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import useUrl from '@/hooks/useUrl';

const Form = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const { getShortUrl } = useUrl();

  const handleGetShortUrl = async () => {
    const shortenUrl = await getShortUrl(url);
    setShortUrl(shortenUrl);
  };

  const handleCopyUrl = async () => {
    navigator.clipboard.writeText(shortUrl);
  }

  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-3 justify-center">
        <Input url={url} handleChangeUrl={setUrl} />
        <Button disabled={!url.length} handleChangeClick={handleGetShortUrl} />
      </div>
      {
        url.length > 0 && shortUrl.length > 0 &&
        <div className="bg-[#ffffff54] mt-3 flex justify-between p-4 rounded-md">
          {shortUrl}
          <DocumentDuplicateIcon onClick={handleCopyUrl} className="h-6 w-6 cursor-pointer text-gray-800" />
        </div>
      }

    </div>
  )
}

export default Form
