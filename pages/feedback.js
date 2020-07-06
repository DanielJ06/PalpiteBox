import React from 'react';

import Link from 'next/link';

function Feedback() {
  return (
    <div className="flex justify-center items-center py-12 px-24">
      <form className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-3/4 items-center mb-4">
          <label className="text-white text-left">Nome:</label>
          <input className="w-3/4 h-16 rounded-lg p-4" type="text"/>
        </div>

        <div className="flex flex-col w-3/4 items-center mb-4">
          <label className="text-white text-left">Email:</label>
          <input className="w-3/4 h-16 rounded-lg p-4" type="text"/>
        </div>

        <div className="flex flex-col w-3/4 items-center mb-4">
          <label className="text-white text-left">Sugestão/Opinião:</label>
          <textarea className="w-3/4 h-16 rounded-lg p-4" />
        </div>

        <div className='my-16'>
        <Link href='/feedback'>
          <a className='bg-green-500 px-20 py-6 text-2xl font-bold rounded-lg text-white hover:bg-green-400'>
            Dar feedback
          </a>
        </Link>
        </div>
        <p className="text-white text-center font-bold">
          Ao dar sua opinião e/ou sugestão <br/>
          ganhe <span className="text-green-400">10% de desconto</span> na sua próxima compra.
        </p>
      </form>
    </div>
  );
}

export default Feedback;