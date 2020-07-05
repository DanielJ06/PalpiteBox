import React from 'react'
import Header from '../Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ background: 'url(/bg.png) no-repeat center/cover' }} className='h-screen mx-auto p-16'>
        {children}
      </div>
    </>
  )
}
export default Layout