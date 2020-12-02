import React, { useEffect, useRef } from 'react'
import { useField } from '@unform/core'

const InputContato = ({name, placehoder,label, ...rest}) => {

    const inputRef = useRef(null)
    const {fieldName, defaultValue, registerField, error} = useField(name)

    useEffect(()=> {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [defaultValue, fieldName, registerField])

    return (
        <div className='flex flex-col w-full px-3 md:px-0 mb-4'>
            <label className='font-bold mb-1 text-white text-lg' htmlFor={name}>{label}</label>
            <input required className='bg-white rounded p-2 h-12' ref={inputRef} type="text" placeholder={placehoder} {...rest}/>
        </div>
    )
}

export default InputContato