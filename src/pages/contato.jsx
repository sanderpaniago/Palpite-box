import React, { useRef } from 'react'
import Link from 'next/link'
import TitlePage from '../components/TitlePage'
import { Form } from '@unform/web'
import {FaFacebookSquare, FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'
import InputContato from '../components/InputContato'

const featcher = (...rest) => fetch(...rest).then(res => res.json())

const Contato = ()=> {

    const formRef = useRef(null)
    const handleSubmitForm = async (data) => {
        const {name, email, assunto, mensagem} = data

        const response = await fetch('/api/send-email', {
            method: 'POST',
            body: JSON.stringify({
                name,
                email,
                assunto,
                mensagem
            })
        })
        if(response.status === 200) {
            return alert('Mensagem enviado com sucesso! logo entrarei em contato com você.')
        }

    }
    return(
        <div className='w-full'>
            <TitlePage title='Contato'/>
            <h2 className=' max-w-lg text-center mx-auto text-blue-900 font-bold text-4xl py-32'><span className='text-yellow-400'>Olá,</span> Se veio até aqui é porque quer falar comigo</h2>

            <div className='bg-blue-900 py-4 mb-10'>
                <Form 
                    className='max-w-lg  mx-auto' 
                    onSubmit={handleSubmitForm}
                    ref={formRef}
                >
                    <h3 className='text-center text-2xl font-bold text-yellow-400 mb-6'>Me envie uma mensagem</h3>
                    <InputContato label='Nome' name='name' placehoder='Digite seu nome...'/>
                    <InputContato label='Email' name='email' placehoder='Digite seu e-mail...' />
                    <InputContato label='Assunto' name='assunto' placehoder='Digite o assunto que deseja tratar' />
                    <InputContato label='Mensagem' name='mensagem' placehoder='Sua mensagem'/>
                    <button type='submit' className="flex w-72 md:w-96 h-16 bg-white text-blue-900 rounded-md my-8 md:my-10 font-bold md:text-2xl shadow-md items-center mx-auto text-while justify-center hover:shadow ">Enviar sua mensagem</button>
                </Form>
            </div>

            <div className='max-w-xl mx-auto px-4'>
                <h3 className='text-center text-2xl font-bold text-yellow-400 mb-6'>Minhas Redes Sociais</h3>

                <div className='flex mb-10 gap-10 flex-wrap justify-center'>
                    <Link href='https://www.facebook.com/sander.pererapaniago'>
                        <a className='w-24 h-24 shadow-xl flex flex-col items-center justify-between py-2 rounded hover:shadow-2xl'>
                            <FaFacebookSquare size={35} color='#1E3B8A'/>
                            <p className='font-bold text-blue-900'>Facebook</p>
                        </a>
                    </Link>
                    <Link href='https://www.instagram.com/sander_paniago/'>
                        <a className='w-24 h-24 shadow-xl flex flex-col items-center justify-between py-2 rounded hover:shadow-2xl'>
                            <FaInstagram size={35}/>
                            <p className='font-bold text-blue-900'>Instagram</p>
                        </a>
                    </Link>
                    <Link href='https://www.linkedin.com/in/sander-paniago/'>
                        <a className='w-24 h-24 shadow-xl flex flex-col items-center justify-between py-2 rounded hover:shadow-2xl'>
                            <FaLinkedin size={35} color='#1E3B8A'/>
                            <p className='font-bold text-blue-900'>Linkedin</p>
                        </a>
                    </Link>
                    <Link href='https://github.com/sanderpaniago'>
                        <a className='w-24 h-24 shadow-xl flex flex-col items-center justify-between py-2 rounded hover:shadow-2xl'>
                            <FaGithub size={35} />
                            <p className='font-bold text-blue-900'>GitHub</p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contato