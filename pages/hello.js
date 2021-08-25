import getMember from './getMember.js';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const [shareCount, setShareCount] = useState(0);

  useEffect(async function () {
    setShareCount(await getMember());
  }, []);

  console.log(shareCount);
  return (
    <div>
      <h1>Hello world</h1>
      //add button to call metamask signature for address //send address to API
      with page parameters of where its sent from //route to /docs/example.md if
      they are member
      <h1>{shareCount}</h1>
    </div>
  );
}

/* 
  {window.ethereum.request({ method: 'eth_requestAccounts' })}
  <h3>The array of data from the member is {member}</h3>
  <h3>Their share count is {shareCount}</h3>  
*/
