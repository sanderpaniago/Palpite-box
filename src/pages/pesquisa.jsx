import React, { useRef, useState } from "react";

import useSWR from "swr";
import { useRouter } from "next/router";
import { Form } from "@unform/web";
import Lottie from "react-lottie";

import Input from "../components/Input";
import InputMaskCell from "../components/InputMask";
import RadioInput from "../components/RaioInput";
import TitlePage from "../components/TitlePage";

import animationData from '../../public/spinner.json';

const featcher = (...rest) => fetch(...rest).then((res) => res.json());

const Pesquisa = () => {
    const router = useRouter();
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);
    const [modalCupom, setModalCupom] = useState({
        isActive: false,
        cupom: '',
        name: '',
    })
    const [controlerAnimation, setControlerAnimation] = useState({
        isStoppend: false,
        isPaused: false,
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const checkboxOptions = [
        { id: 1, value: 1, label: 1 },
        { id: 2, value: 2, label: 2 },
        { id: 3, value: 3, label: 3 },
        { id: 4, value: 4, label: 4 },
        { id: 5, value: 5, label: 5 },
    ];

    const radioOptionRecomendation = [
        { id: "sim", value: "sim", label: "Sim" },
        { id: "nao", value: "nao", label: "Não" },
    ];

    const { data, error } = useSWR("/api/get-promo", featcher);

    const handleSubmit = async (data) => {
        const { email, nome, opniao, recomendacao, whatsapp, nota } = data;

        setLoading(true);

        const response = await fetch("/api/createRow", {
            method: "POST",
            body: JSON.stringify({
                nome,
                email,
                whatsapp,
                opniao,
                nota: nota[0],
                recomendacao: recomendacao[0],
            }),
        });
        const {cupom, name} = await response.json()

        if (response.status == 200) {
            setLoading(false);
            return setModalCupom({
                isActive: true,
                cupom,
                name
            })
        }
        setLoading(false);
        return alert("Falha ao enviar sua opnião. Tente novamente mais tarde!!");
    };

    if (error) return <div>failed to load</div>;
    if (!data) return <div>loading</div>;


    return (
        <div className="container mx-auto mt-10 overflow-hidden">
            <TitlePage title="Pesquisa" />
            <h1 className="text-center mb-4 font-bold text-lg">
                Críticas e sugestões
            </h1>

            <p className="text-center ">
                O restaurante X sempre busca por atender melhor seus clientes. <br />
        Por isso, estamos sempre abertos a ouvir a sua opinião.
            </p>

            <Form
                onSubmit={handleSubmit}
                ref={formRef}
                className="flex flex-col items-center mt-6"
            >
                <Input label="Seu nome" name="nome" placehoder="Digite seu nome..." />
                <Input
                    label="E-mail"
                    name="email"
                    placehoder="exemplo@email.com"
                    type="email"
                />
                <InputMaskCell
                    label="Whatsapp"
                    name="whatsapp"
                    placehoder="(XX) X.XXXX-XXXX"
                    type="tel"
                />
                <Input
                    label="Sua crítica ou sugestão"
                    name="opniao"
                    placehoder="Deixe sua crítica ou sugestão aqui"
                />

                <h6 className="font-bold text-lg mb-5">
                    Que nota vecê daria para o estabelecimento:
        </h6>

                <div className="flex gap-10">
                    <RadioInput name="nota" options={checkboxOptions} />
                </div>

                <h6 className="font-bold text-lg my-5">Recomentdaria para um amigo?</h6>
                <div className="flex gap-10">
                    <RadioInput name="recomendacao" options={radioOptionRecomendation} />
                </div>
                {loading ? (
                    <button className="flex w-72 md:w-96 h-16 bg-navy-blue-500 rounded-md my-8 md:my-10 font-bold md:text-2xl shadow-md items-center text-while justify-center hover:shadow cursor-not-allowed" disabled>
                        <div className="pointer-events-none flex items-center">
                            <Lottie
                                options={defaultOptions}
                                width={40}
                                height={40}
                                isPaused={controlerAnimation.isPaused}
                                isStopped={controlerAnimation.isStoppend}
                            />
                            <span className="ml-3">Carregando...</span>
                        </div>
                    </button>
                ) : (
                        <button className="flex w-72 md:w-96 h-16 bg-navy-blue-500 rounded-md my-8 md:my-10 font-bold md:text-2xl shadow-md items-center text-while justify-center hover:shadow">
                            Enviar sugestão
                        </button>
                    )}
            </Form>
            {data.activePromotion && (
                <p className="text-center font-bold mb-12">{data.textPromotion}</p>
            )}

            {modalCupom.isActive && ( <div className='flex items-center justify-center bg-black bg-opacity-70 w-screen h-screen absolute top-0 left-0 '>
                <div className='h-4/4 w-3/4 bg-white rounded flex flex-col items-center p-4 pt-10 justify-center max-w-md'>
                    <div className='flex flex-col items-center bg-green-400 bg-opacity-60 p-6 border-b-4 border-green-600 mb-8'>
                        <strong className='text-lg text-green-900'>Obrigado por deixar sua sugestão!!</strong>
                        <p className='text-center mt-2 text-green-800 font-medium'>como agradecimento temos um cupom expecial para você</p>
                    </div>

                    <div className='flex w-full'>
                        <div className='w-1/4 bg-navy-blue-600 p-4 rounded-l-lg'>
                            <img src='/logo_palpitebox.png' alt="cupom palpite box"/>
                        </div>
                        <div className='bg-navy-blue-500 flex flex-col w-3/4 rounded-r-lg items-center justify-center'>
                            <strong className='text-navy-blue-900'>{modalCupom.name}</strong>
                            <span className='font-medium text-navy-blue-900'>{modalCupom.cupom}</span>
                        </div>
                    </div>

                    <p className='bg-yellow-200 text-center p-3 rounded-lg font-bold text-yellow-700 mt-8'>Tire print ou uma foto deste cupom e mostre ao garçom</p>

                    <span className='text-center mt-10 font-bold'>Preecha a pesquisa e ganhe 15% de desconto em sua proxima compra</span>

                    <button 
                        onClick={()=> router.push('/')}
                        className='flex w-72 md:w-96 h-16 bg-navy-blue-500 rounded-md my-8 md:my-10 font-bold md:text-2xl shadow-md items-center text-while justify-center hover:shadow'>Voltar para a Home</button>
                </div>
                </div>)}
        </div>
    );
};

export default Pesquisa;
