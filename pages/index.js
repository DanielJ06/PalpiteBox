import React from 'react';

import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1>Hello next</h1>
      <div>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}

export default Index;