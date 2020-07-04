import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div>
      <h1>Contact page</h1>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    </div>
  );
}

export default Contact;