import React, { useEffect, useState } from 'react';
import router, { useRouter } from 'next/router';

export default function Secret() {
  //if (shareCount == 0) {router.push('/gtfo')}

  return (
    <div>
      <h1>Welcome to the secret club, person who has {shareCount} shares.</h1>
    </div>
  );
}
