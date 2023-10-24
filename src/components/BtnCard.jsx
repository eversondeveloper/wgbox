/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { BtnCardStyle } from "./BtnCardStyle"
import { useEffect, useRef, useState } from "react"
import somHover from "../assets/sounds/hover.mp3"
import somMensagem from "../assets/sounds/mensagem.mp3"
import tirandoCarta from "../assets/sounds/tirandocarta.mp3"

function BtnCard(props){

    const animRefCard3 = useRef()
    const animRefCard4 = useRef()
    const animRefCard5 = useRef()
    const animRefCard6 = useRef()
    const animRefCard7 = useRef()
    const animRefCard8 = useRef()
    const animRefCard9 = useRef()
    const animRefCard10 = useRef()
    const animRefCard11 = useRef()
    const animRefCard12 = useRef()
    const animRefCard13 = useRef()
    const animRefCard14 = useRef()
    const animRefCard15 = useRef()

    
    const [cardAtual, setCardAtual] = useState("")
    const [contAside2, setContAside2] = useState("")
    const [contAside21, setContAside21] = useState("")
    const [contAside22, setContAside22] = useState("")
    const [contAside23, setContAside23] = useState("")
    const [contAside24, setContAside24] = useState("")
    const cor1 = "#29A5F2"
    const cor2 = "#3DD980"
    const cor3 = "#A7F205"
    const cor4 = "#F25757"
    const cor5 = "#e4e4e4"
    
    const conteudo = useRef()

    let somH = ()=>{
        let somHoverF = new Audio(somHover)
        somHoverF.volume = .3
        somHoverF.play()
    }
    
    useEffect(()=>{
        let int = setTimeout(()=>{
            if(props.card == true){
                let somMens = new Audio(somMensagem)
                somMens.volume = .3
                somMens.play()
            }   
        },1000)

        return ()=>{clearTimeout(int)}
    },[props.card])

    useEffect(()=>{        
        
                let tiraCarta = new Audio(tirandoCarta)
                tiraCarta.volume = .3
                tiraCarta.play()                
                
            },[props.card])
            
            useEffect(()=>{

                let numAleatorio = Math.floor(Math.random() * (props.versPromessas.length - 1))
                
                props.card == true ? 

                (
                    
                    props.setMensagem(<blockquote>"{props.versPromessas[numAleatorio].vers.toString()}" <strong>({props.versPromessas[numAleatorio].referencia.toString()})</strong></blockquote>)                   

                    // conteudo.current.textContent += `${props.versPromessas[numAleatorio].vers} ${props.versPromessas[numAleatorio].referencia}`
                
                )

                :
                setTimeout(()=>{
                    
                },1000)

                setTimeout(()=>{
                    if(contAside2 == "" && contAside2 != undefined && props.card == true){
                        setContAside2(`"${props.versPromessas[numAleatorio].vers}" (${props.versPromessas[numAleatorio].referencia})`.toString())
                    }else if(contAside21 == "" && contAside21 != undefined && props.card == true){
                            setContAside21(`"${props.versPromessas[numAleatorio].vers}" (${props.versPromessas[numAleatorio].referencia})`.toString())
                    }else if(contAside22 == "" && contAside22 != undefined && props.card == true){
                        setContAside22(`"${props.versPromessas[numAleatorio].vers}" (${props.versPromessas[numAleatorio].referencia})`.toString())
                    }else if(contAside23 == "" && contAside23 != undefined && props.card == true){
                        setContAside23(`"${props.versPromessas[numAleatorio].vers}" (${props.versPromessas[numAleatorio].referencia})`.toString())
                    }else if(contAside24 == "" && contAside24 != undefined && props.card == true){
                        setContAside24(`"${props.versPromessas[numAleatorio].vers}" (${props.versPromessas[numAleatorio].referencia})`.toString())
                    }
                }, 1000)
                                
            },[props.card])


    return <BtnCardStyle className="card2"  corCardBack={props.corCardBack} setCorCardBack={props.setCorCardBack} corCardBorda={props.corCardBorda} setCorCardBorda={props.setCorCardBorda} card={props.card} setCard={props.setCard} cor1={cor1} cor2={cor2} cor3={cor3} cor4={cor4} cor5={cor5} cardAtual={cardAtual} contAside24={contAside24} >
        
        <div className="aside1">
            <div>
                <p>Desenvolvido por <br/>
                <a href="https://everson33rj.github.io/digitalbusinesscard/" target="blank">Everson Silva</a>
                </p>
                <p>Bíblia Versão<br/>
                <a href="https://sites.google.com/site/biblialivre/" target="blank">Biblia Livre</a>
                </p>
                <p>Efeitos sonoros<br/>
                <a href="https://pixabay.com/pt/" target="blank">pixbay</a>
                </p>
                
                <p>WGBOX - 2023<br/>
                Word of God on the Box
                </p>
            </div>
        </div>
        
        <div className="mainGeral">
        <div className="card15" ref={animRefCard15}  onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (

                setCardAtual(e.target.className),
                props.setCard(true)
                
                
            )
            
        }} >{cardAtual == "card15" ? props.mensagem : ""}</div>
        <div className="card14" ref={animRefCard14}  onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card14" ? props.mensagem : ""}</div>
        <div className="card13" ref={animRefCard13}  onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card13" ? props.mensagem : ""}</div>
        <div className="card12"  ref={animRefCard12} onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card12" ? props.mensagem : ""}</div>
        <div className="card11"  ref={animRefCard11} onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card11" ? props.mensagem : ""}</div>
        <div className="card10" ref={animRefCard10} onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card10" ? props.mensagem : ""}</div>
        <div className="card9"  ref={animRefCard9} onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card9" ? props.mensagem : ""}</div>
        <div className="card8"  ref={animRefCard8} onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card8" ? props.mensagem : ""}</div>
        <div className="card7"  ref={animRefCard7} onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card7" ? props.mensagem : ""}</div>
        <div className="card6"  ref={animRefCard6} onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card6" ? props.mensagem : ""}</div>
        <div className="card5"  ref={animRefCard5} onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)
            )
            :
            (
                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
            
        }} >{cardAtual == "card5" ? props.mensagem : ""}</div>

        <div className="card4" ref={animRefCard4} value="card4"  onMouseEnter={()=>{            
            somH()
        }} onClick={(e)=>{

            setCardAtual("card4")
            
            props.card == true 
            ?            
            (               
                props.setCard(false)
            )
            :
            (

                setCardAtual(e.target.className),
                props.setCard(true)
                
            )
                
        }} >{cardAtual == "card4" ? props.mensagem : ""}</div>

        <div className="card3" id="card3" ref={animRefCard3} onMouseEnter={()=>{
            somH()
        }} onClick={(e)=>{

            props.card == true 
            ?            
            (
                
                props.setCard(false)

            )
            :
            (

                setCardAtual(e.target.className),
                props.setCard(true)
                               
            )
            
        }} >{cardAtual == "card3" ? props.mensagem : ""}</div>
        </div>
        <div className="aside2" ref={conteudo} >

            
            <div>
                <p>{contAside2}</p>
                <p>{contAside21}</p>
                <p>{contAside22}</p>
                <p>{contAside23}</p>
                <p>{contAside24}</p>
            </div>
            {contAside24 != "" ? 
                <input type="button" value="Limpar" onClick={()=>{
                    setContAside2("")
                    setContAside21("")
                    setContAside22("")
                    setContAside23("")
                    setContAside24("")
                }} />
            :
            ""    
        }
        </div>

    </BtnCardStyle>
}

export default BtnCard