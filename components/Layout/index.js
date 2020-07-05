import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{ background: 'url(/bg.png) no-repeat center/cover' }} className='h-screen mx-auto'>
        {children}
      </div>
      <Footer />
    </>
  )
}
export default Layout