/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useEffect } from "react"
import { CardsStyled } from "./CardsStyles"


function Cards(props){

    
    
    useEffect(()=>{
        let numAleatorio = Math.floor(Math.random() * (props.versPromessas.length - 1))

        props.card == true ? 
        props.setMensagem(<blockquote>"{props.versPromessas[numAleatorio].vers}" <strong>({props.versPromessas[numAleatorio].referencia})</strong></blockquote>)
        :
        "" 
    },[props.card])

    return <CardsStyled corCardBack={props.corCardBack} setCorCardBack={props.setCorCardBack} corCardBorda={props.corCardBorda} setCorCardBorda={props.setCorCardBorda} card={props.card} setCard={props.setCard}  >

        {props.mensagem}
        
    
    </CardsStyled>

}

export default Cards