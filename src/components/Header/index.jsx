import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-gray-100 '>
            <div className='flex-col shadow-md p-4 '>
                <div className="flex container mx-auto flex item-center justify-center">
                    <Link href='/'>
                        <img src="/logo_palpitebox.png" alt="PalPiteBox" />
                    </Link>
                </div>
            </div>
            <div className='shadow-md bg-gray-200'>
                <nav className='max-w-xs mx-auto flex item-center justify-between p-3 '>
                    <Link href='/sobre' >
                        <a className='font-bold text-lg hover:underline'>Sobre o dev</a>
                    </Link>
                    <Link href='/pesquisa' >
                        <a className='font-bold text-lg hover:underline'>Pesquisa</a>
                    </Link>
                    <Link href='/contato' >
                        <a className='font-bold text-lg hover:underline'>Contato</a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header