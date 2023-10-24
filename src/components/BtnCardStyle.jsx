import styled from "styled-components";

export const BtnCardStyle = styled.div`

    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;

.aside1{
    width: 25%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #757575;
}

.aside1 div{
    width: 100%;
}

.aside1 div p{
    margin-bottom: 20px;
}

.aside1 a{
    color: #feb000;
    text-decoration: none;
}

.aside2{
    width: 25%;
    height: 100vh;
    color: #757575;
    padding-left: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 1s;
}


.aside2 p{
    margin-bottom: 20px;
}

.aside2 input{
    border: none;
    width: 100%;
    height: 30px;
    background-color: #feb000;
    border-radius: 5px;
}

.aside2 input:hover{
    background-color: #c58a00;
}

.mainGeral{
    width: 30%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card3{
    color: #000;
    transition: 1s;
    background-color: ${props => props.cor3};
    width: 400px;
    height: 220px;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;    
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card3" ? "anim_card3_1" : "anim_card3_2"} ease-in-out;
    animation-fill-mode: both;    
    transform: scale(1) translate(0%, 190%);
    position: absolute;
}

.card3:hover{
    transform: scale(1) translate(0%, 185%);
}

@keyframes anim_card3_1 {

0%{
    transform: scale(1) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card3_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}

////////////////////////////////////////

.card4{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor1};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card4" ? "anim_card4_1" : "anim_card4_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.95) translate(0%, 190%);

}

.card4:hover{
    transform: scale(.95) translate(0%, 185%);
}

@keyframes anim_card4_1 {

0%{
    transform: scale(.95) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card4_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}


.card5{
    color: #fff;
    transition: .2s;
    background-color: ${props => props.cor4};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card5" ? "anim_card5_1" : "anim_card5_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.90) translate(0%, 190%);

}

.card5:hover{
    transform: scale(.90) translate(0%, 185%);
}

@keyframes anim_card5_1 {

0%{
    transform: scale(.90) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card5_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}



.card6{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor5};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card6" ? "anim_card6_1" : "anim_card6_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.85) translate(0%, 190%);

}

.card6:hover{
    transform: scale(.85) translate(0%, 185%);
}

@keyframes anim_card6_1 {

0%{
    transform: scale(.85) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card6_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}


.card7{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor1};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card7" ? "anim_card7_1" : "anim_card7_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.80) translate(0%, 190%);

}

.card7:hover{
    transform: scale(.80) translate(0%, 185%);
}

@keyframes anim_card7_1 {

0%{
    transform: scale(.80) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card7_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}


.card8{
    color: #fff;
    transition: .2s;
    background-color: ${props => props.cor4};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card8" ? "anim_card8_1" : "anim_card8_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.75) translate(0%, 190%);

}

.card8:hover{
    transform: scale(.75) translate(0%, 185%);
}

@keyframes anim_card8_1 {

0%{
    transform: scale(.75) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card8_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}


.card9{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor3};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card9" ? "anim_card9_1" : "anim_card9_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.70) translate(0%, 190%);
}

.card9:hover{
    transform: scale(.70) translate(0%, 185%);
}

@keyframes anim_card9_1 {

0%{
    transform: scale(.70) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card9_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}

.card10{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor2};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card10" ? "anim_card10_1" : "anim_card10_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.65) translate(0%, 190%);

}

.card10:hover{
    transform: scale(.65) translate(0%, 185%);
}

@keyframes anim_card10_1 {

0%{
    transform: scale(.65) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card10_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}

.card11{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor1};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card11" ? "anim_card11_1" : "anim_card11_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.60) translate(0%, 190%);

}

.card11:hover{
    transform: scale(.60) translate(0%, 185%);
}

@keyframes anim_card11_1 {

0%{
    transform: scale(.60) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card11_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}


.card12{
    color: #fff;
    transition: .2s;
    background-color: ${props => props.cor4};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card12" ? "anim_card12_1" : "anim_card12_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.55) translate(0%, 190%);

}

.card12:hover{
    transform: scale(.55) translate(0%, 185%);
}

@keyframes anim_card12_1 {

0%{
    transform: scale(.55) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card12_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}

.card13{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor2};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card13" ? "anim_card13_1" : "anim_card13_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.50) translate(0%, 190%);

}

.card13:hover{
    transform: scale(.50) translate(0%, 185%);
}

@keyframes anim_card13_1 {

0%{
    transform: scale(.50) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card13_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}

.card14{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor5};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card14" ? "anim_card14_1" : "anim_card14_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.45) translate(0%, 190%);

}

.card14:hover{
    transform: scale(.45) translate(0%, 185%);
}

@keyframes anim_card14_1 {

0%{
    transform: scale(.45) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card14_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}


.card15{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor3};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card15" ? "anim_card15_1" : "anim_card15_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.40) translate(0%, 190%);

}

.card15:hover{
    transform: scale(.40) translate(0%, 185%);
}

@keyframes anim_card15_1 {

0%{
    transform: scale(.40) translate(0%, 185%) rotate(-30deg);
}

100%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%);
}

}

@keyframes anim_card15_2 {

0%{
    box-shadow: 45px 45px 45px #0000005e;
    transform: translate(0%, 0%) rotate(-30deg);
}

90%{
    
}

100%{

    
}

}

.card16{
    color: #000;
    transition: .2s;
    background-color: ${props => props.cor1};
    width: 400px;
    height: 220px;
    transform: scale(.97);
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    position: absolute;
    bottom: -40px;
    cursor: pointer;
    animation: 1s ${props => props.card == true && props.cardAtual == "card16" ? "anim_card16_1" : "anim_card16_2"} ease-in-out;
    animation-fill-mode: both;
    transform: scale(.35) translate(0%, 190%);

}

.card16:hover{
    transform: scale(.35) translate(0%, 185%);
}


blockquote{
text-align: center;
font-size: 15pt;
user-select: none;
}

@media (max-width: 1100px) {
  .aside1, .aside2 {
    display: none;
  }
}

`