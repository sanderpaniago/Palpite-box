import { useField } from '@unform/core'
import React, { useEffect, useRef } from 'react'

const RadioInput = ({name, options, ...rest}) => {

    const inputRefs = useRef([])
    const {fieldName, registerField, defaultValue = []} = useField(name)
    
    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRefs.current,
            getValue: (refs) =>{
                return refs.filter(ref => ref.checked).map(ref => ref.value)
            },
            clearValue: (refs) => {
                refs.forEach(ref =>{
                    ref.checked = false
                })
            },
            setValue: (refs, values) => {
                refs.forEach(ref => {
                    if(values.includes(ref.id)) {
                        ref.checked = true
                    }
                })
            }
        })
    }, [defaultValue, fieldName, registerField])
    return (
        <div>
            {options.map((option, index) => (
                <label  className='mr-4 font-bold' htmlFor={option.id} key={option.id}>
                    <input 
                        className='mr-2'
                        ref={ref => {
                            inputRefs.current[index] = ref ;
                        }}
                        name={name}
                        value={option.value}
                        type="radio"
                        id={option.id}
                        {...rest}
                        />
                        {option.label}
                </label>
            ))}
        </div>
    )
}

export default RadioInput