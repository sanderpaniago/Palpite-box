import React from 'react'
import TitlePage from '../components/TitlePage'
import Link from 'next/link'

const Sobre = () => {

    const skills = [
        {title: 'React Js', imgUrl: '/icon-react.png'},
        {title: 'JavaScript', imgUrl: '/icon-js.png'},
        {title: 'CSS3', imgUrl: '/icon-css.png'},
        {title: 'HTML', imgUrl: '/icon-html.png'}
    ]

    return (
        <div>  
            <TitlePage title='Sobre Dev'/>

            <div className='sm:bg-img-cv bg-none bg-no-repeat bg-left-bottom h-xl'>
                <div className='max-w-sm  mx-auto sm:mr-0 md:mx-auto xl:max-w-3xl  xl:mx-auto  pl-10'>
                    <h2 className='text-blue-900 font-bold text-4xl pt-32'><span className='text-yellow-400'>Olá, </span>Me chamo Sander</h2>
                    <p className='mt-16 text-blue-900 max-w-2xl text-2xl'>Atualmente trabalho como desenvolvedor front-end, sou um 
                    amante de todo ecossitema React, umas das libs que mais 
                    dedico meus estudos.</p>
                </div>
            </div>
            <div className='bg-blue-900 pb-24'>
                <h3 className='text-yellow-300 font-bold text-2xl text-center py-10'>Principais Skills</h3>
                <div className='max-w-3xl mx-auto flex md:justify-between flex-wrap justify-center gap-6'>
                    {skills.map((item, key)=> {
                        return (
                            <div className='w-28 h-36 bg-white flex flex-col items-center justify-center rounded'>
                                <img className='p-4' src={item.imgUrl} alt="ReactJS"/>
                                <p className='text-blue-900 font-bold text-base'>{item.title}</p>
                            </div>
                        )
                    })}
                </div>
                <div className='mt-36 max-w-3xl mx-auto flex flex-col md:flex-row items-center '>
                    <div className='w-64 h-80 bg-yellow-400 flex-shrink-0 p-4 mb-4  mr-11'>
                        <h3 className='text-4xl font-bold uppercase text-white leading-10'>agora vamos falar um pouco sobre mim.</h3>
                    </div>
                    <p className='text-white font-light px-4 md:px-0'>Sou desenvolvedor a quase 1 ano e tenho uma paixão por me desenvolver cada dia mais, sou o tipo de cara que gosta da liberdade, pois assim permitindo me evoluir cada dia mais. Tenho como objetivo colocar projetos e ideia no ar, por que oque não é visto não é lembrado.</p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center mt-36 sm:max-w-xl md:max-w-2xl max-w-xl mx-auto justify-between mb-24'>
                <Link href='https://github.com/sanderpaniago'>
                    <a className=' order-1 md:order-none border-2 border-blue-900 rounded text-blue-900 font-bold flex-shrink-0 p-2 hover:bg-blue-900 hover:text-white transition delay-200'>Acessar GitHub</a>
                </Link>
                <p className='max-w-xs text-center md:text-right mb-6 md:mb-0 text-2xl text-blue-900 font-bold'>Caso queira ver alguns de meus projetos acesse meus repositórios, estarei deixando um botao que te levara direto para meu github</p>
            </div>
        </div>
    )
}

export default Sobre