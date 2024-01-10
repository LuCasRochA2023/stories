import React from "react"
import styled from "styled-components"
const FormEstilizado=styled.form`
    display:flex;
    flex-direction:column;
`
const InputEstilizado=styled.input`
    border-radius: 24px;
    border: 1px solid #002F52;
    width: 509px;
    height: 32px;
    padding: 10px 16px;
    align-items: center;
`
const LabelEstilizado=styled.label`
    color: #002F52;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding:4px 24px;

`
export interface CampoTextoProps{
    label:string
    value:string
    onChange:(value:string)=>void
    type?:'text'|'email'|'password'|'date'
}
export const AbInput=({label,value,onChange,type='text'}:CampoTextoProps)=>{
    return(
        <FormEstilizado>
            <LabelEstilizado>{label}</LabelEstilizado>
            <InputEstilizado type={type} value={value} onChange={(evento:React.ChangeEvent<HTMLInputElement>)=>onChange(evento.target.value)}/>
        </FormEstilizado>
    )
}