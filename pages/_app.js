import React, { useEffect, useState } from 'react';
import getMember from '../getMember.js';

export default function MyApp({ Component, pageProps }) {
  const [member, setMember] = useState(0);

  useEffect(async function () {
    setMember(await getMember());
  }, []);

  if (!member) {
    return <h1>Loading...</h1>;
  }

  if (member) {
    return (
      <div>
        <Component {...pageProps} />
      </div>
    );
  }
}
