import React from 'react';

import Form from '@/components/Form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-5 text-white">URL Shortener</h1>
      <Form />
    </main>
  );
}
