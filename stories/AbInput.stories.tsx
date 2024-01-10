import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import {AbInput, CampoTextoProps} from "../src"

export default {
    title:'Componentes/AbInput',
    component:AbInput,
    argTypes:{
        label:{
            control:'text'
        }
    },
    parameters:{actions:{argTypesRegex:'ˆon.*'}}

}as ComponentMeta<typeof AbInput>

const Template:ComponentStory <typeof AbInput> =(args)=><AbInput {...args}/>

export const Secundario= Template.bind({})
Secundario.args={
    label:'Email'
}as CampoTextoProps