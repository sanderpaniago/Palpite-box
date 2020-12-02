import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-blue-900 p-4 mt-auto md:bottom-0 w-full'>
            <div className="container mx-auto flex flex-col items-center">
                <strong className='flex justify-center text-white text-center '>Projeto desenvolvido por: Sander Paniago</strong>
                <div className='gap-3 flex text-white font-bold my-4'>
                    <Link  href='https://github.com/sanderpaniago'>
                        <a className='text-yellow-400 hover:text-yellow-600'>GitHub</a>
                    </Link>
                    <Link  href='https://www.instagram.com/sander_paniago/'>
                        <a className='text-yellow-400 hover:text-yellow-600'>Instagram</a>
                    </Link>
                    <Link  href='https://www.linkedin.com/in/sander-paniago/'>
                        <a className='text-yellow-400 hover:text-yellow-600'>Linkedin</a>
                    </Link>
                </div>
                <div className="flex justify-center flex-col sm:flex-row">
                    <img className='object-contain mb-5 sm:mb-0 p-4' src="/logo_semana.png" alt="Semana Fullstack Master "/>
                    <img className='object-contain p-4' src="/logo_devpleno.png" alt="Dev Pleno" />
                </div>
            </div>
        </footer>
    )  
}

export default Footer 