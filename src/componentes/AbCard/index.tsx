import styled from "styled-components"
import React from "react"

import { Sacola } from "../assets/Sacola"
import { Favoritos } from "../assets/Favoritos"

const   Card=styled.div`
    border-radius:10px;
    box-shadow:0px 4px 4px 0px rgba(0,0,0,0.25);
    background:#FFF;
    
    padding: 48px 32px 48px 48px;
    width: 551px;
    font-family:'Poppins', sans-serif;
    `
const DivEstilizada=styled.div`
    display:flex;
    justify-content:space-between;
`
const TituloEstilizado=styled.h2`
    font-size:32px;
    font-weight:700;
    font-style:normal;
    color:#EB9B00;
    
`
const Container=styled.div`
    display:flex;
    justify-content:flex-end;
    text-align:center;
`
const BotaoComEstilo=styled.button`
    color:#FFFFFF;
    background:#EB9B00;
    width:169px;
    padding:16px;
    font-size:16px;
    

`
const DivBotao=styled.div`
    display:flex;
    justify-content:flex-end;

`
export const AbCard=()=>{
    return(
        <Card>
            <DivEstilizada>
            <TituloEstilizado>
                    Sobre o livro:
                </TituloEstilizado>
            <Container>

               <Sacola/>
               <Favoritos/>
            </Container>
            </DivEstilizada>
            <DivBotao>
                <BotaoComEstilo>
                    Comprar
                </BotaoComEstilo>
            </DivBotao>
        </Card>

    )
}