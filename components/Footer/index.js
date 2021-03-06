import React from 'react';

import Link from 'next/link';

function Footer() { 
  return (
    <footer className="w-full text-center border-t border-grey p-4 pin-b">
      <img src="/logo_paplpitebox.png"/>
      <div>
        <Link href="/">
          <a className="text-white text-xl font-bold ml-10 hover:text-green-400">HOME</a>
        </Link>
        <Link href="/about">
          <a className="text-white text-xl font-bold ml-10 hover:text-green-400">SOBRE</a>
        </Link>
        <Link href="/contact">
          <a className="text-white text-xl font-bold ml-10 hover:text-green-400">CONTATO</a>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;