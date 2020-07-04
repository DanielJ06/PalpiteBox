import React from 'react';

import Link from 'next/link';

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <div>
        <Link href="/" >
          <a>Home</a>
        </Link>
        <Link href="/contact" >
          <a>Contact</a>
        </Link>
      </div>
    </div>
  )
}

export default About;