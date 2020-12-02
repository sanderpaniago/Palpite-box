import React from 'react'
import Link from 'next/link'
import useSWR from 'swr'
import TitlePage from '../components/TitlePage'

const featcher = (...rest) => fetch(...rest).then(res => res.json())

const Index = () => {

    const {data, error} = useSWR('/api/get-promo', featcher)


    return (
        <div className='container mx-auto  md:mt-36 flex justify-center items-center flex-col min-h-1/2 md:min-h-full'>
            <TitlePage title='Bem-vindo'/>
            <p className='max-w-xl text-center text-lg'>O restaurante X sempre busca por atender melhor seus clientes. <br/>
Por isso, estamos sempre abertos a ouvir a sua opinião.</p>
            <Link href='/pesquisa'>
                <a className= 'flex w-72 md:w-96 h-16 bg-navy-blue-500 rounded-md my-8 md:my-16 font-bold md:text-2xl shadow-md items-center justify-center hover:shadow'>Dar opinião ou sugestão</a>
            </Link>
            
            {!error && data && data.activePromotion && <p className='text-center font-bold mb-12'>{data.textPromotion}</p>}
        </div>
    )
}

export default Index