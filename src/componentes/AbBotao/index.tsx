import React from "react";
import styled, { css } from "styled-components";
export interface AbBotaoProps{
    texto?:string,
    tipo?:'primario'|'secundario',
    onClick?:()=>void
}

const BotaoEstilizado=styled.button<AbBotaoProps>`
    padding:16px 32px;
    background:${(props:AbBotaoProps)=>props.tipo==='primario' ? '#EB9B00': '#FFF'};
    border:2px solid #EB9B00;
    color:${(props:AbBotaoProps)=>props.tipo==='primario' ? '#FFF': '#EB9B00'};
    font-size:20px;
    cursor:pointer;

    ${(props:AbBotaoProps)=>props.tipo==='primario' 
    ? css`
    &:hover{
        background:#BB7900;
        border:2px solid #BB7900;
    }
`   : css`
    &:hover{
        background:#FFF;
        border:2px solid #B87900;
        color:#B87900;
    }
    
`
    }
    `
export const AbBotao=({texto,onClick,tipo='primario'}:AbBotaoProps)=>{
    
return(
        <BotaoEstilizado onClick={onClick} tipo={tipo}>
            {texto}

        </BotaoEstilizado>
    )
}