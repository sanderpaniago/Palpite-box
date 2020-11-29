import React from 'react'
import Link from 'next/link'
import TitlePage from '../components/TitlePage'

const Contato = ()=> {
    return(
        <div>
            <TitlePage title='Contato'/>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </div>
    )
}

export default Contato