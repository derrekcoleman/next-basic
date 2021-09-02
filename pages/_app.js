import '../styles/globals.css';
import React, { useEffect, useState } from 'react';
import getMember from './getMember.js';

export default function MyApp({ Component, pageProps }) {
  const [shareCount, setShareCount] = useState(0);

  useEffect(async function () {
    setShareCount(await getMember());
  }, []);

  if (shareCount == 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (shareCount != 0) {
    return (
      <div>
        <h1>The share count is not zero: {shareCount}</h1>
        <Component {...pageProps} />
      </div>
    );
  }
}
