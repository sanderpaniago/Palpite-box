import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({children}) => {
    return (
        <div className='min-h-screen flex flex-col  overflow-x-hidden'>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout