import React from 'react';

import Link from 'next/link';

function Header() { 
  return (
    <div className="bg-gray-900 py-6 px-10 flex flex-row justify-between items-center">
      <img className="h-24 w-24" src="/logo_paplpitebox.png"/>
      <div>
        <Link href="/">
          <a className="text-white text-xl font-bold ml-10 hover:text-green-400">HOME</a>
        </Link>
        <Link href="/">
          <a className="text-white text-xl font-bold ml-10 hover:text-green-400">SOBRE</a>
        </Link>
        <Link href="/">
          <a className="text-white text-xl font-bold ml-10 hover:text-green-400">CONTATO</a>
        </Link>
      </div>
    </div>
  );
}

export default Header;