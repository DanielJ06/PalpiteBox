import React from 'react';

import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <h1 className="text-5xl font-bold text-white leading-10">
        O <span className="text-green-400 hover:text-green-500">
          estabelecimento X
          </span> se preocupa com os clientes
      </h1>
      <h3 className="text-4xl font-bold text-white mt-4">por isso estamos abertos para a opiniões</h3>
      <div className='my-16'>
        <Link href='/feedback'>
          <a className='bg-green-500 px-20 py-6 text-2xl font-bold rounded-lg shadow-lg text-white hover:bg-green-400'>
            Dar feedback
          </a>
        </Link>
      </div>
      <p className="text-white font-bold text-2xl">
        Ao dar seu feedback você <br/> 
        nos ajuda a entregar um melhor atendimento <br/> 
        e ainda ganha um <span className="text-green-400">cupom de 10%</span> na sua próxima compra
      </p>
    </div>
  );
}

export default Index;