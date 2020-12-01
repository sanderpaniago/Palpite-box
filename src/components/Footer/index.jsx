import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-blue-900 p-4 mt-auto md:bottom-0 w-full'>
            <div className="container mx-auto">
                <strong className='flex justify-center text-white text-center '>Projeto desenvolvido por: Sander Paniago</strong>
                <div className="flex justify-center flex-col sm:flex-row">
                    <img className='object-contain mb-5 sm:mb-0 p-4' src="/logo_semana.png" alt="Semana Fullstack Master "/>
                    <img className='object-contain p-4' src="/logo_devpleno.png" alt="Dev Pleno" />
                </div>
            </div>
        </footer>
    )  
}

export default Footer 