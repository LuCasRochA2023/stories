import React from "react";
import { AbGrupoDeOpcoes } from '../src/componentes/AbGrupoDeOpcoes'
import { ComponentMeta, ComponentStory } from '@storybook/react'

export default {
    title: 'Componentes/AbGrupoDeOpcoes',
    component: AbGrupoDeOpcoes
} as ComponentMeta<typeof AbGrupoDeOpcoes>

const Template: ComponentStory<typeof AbGrupoDeOpcoes> = (args) => <AbGrupoDeOpcoes {...args} />

export const Primario = Template.bind({})
Primario.args={
    opcoes:[{
        id:1,
        titulo:'E-book',
        corpo: 'R$ 00,00',
        rodape: '.pdf, .epub, .mob'
    },{
        id:2,
        titulo:'E-book',
        corpo: 'R$ 00,00',
        rodape: '.pdf, .epub, .mob'
    },{
        id:3,
        titulo:'E-book',
        corpo: 'R$ 00,00',
        rodape: '.pdf, .epub, .mob'
    }]

}

