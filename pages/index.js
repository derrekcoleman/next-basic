import getMember from '../getMember.js';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Hello({ shareCount }) {
  const router = useRouter();

  return (
    <div>
      <h1>Hello world</h1>
      {
        //add button to call metamask signature for address
        //send address to API with page parameters of where its sent from
        //route to /docs/example.md if they are member
      }
      <h1>{shareCount}</h1>

      {shareCount != 0 ? (
        <button type="button" onClick={() => router.push('/secret')}>
          Click me!!
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}