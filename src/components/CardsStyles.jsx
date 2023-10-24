import styled from "styled-components";

export const CardsStyled = styled.div`

    color: #a7a7a7;
    border: #00000052 solid 1px;
    background-color: #2c2c2c;
    height: auto;
    width: 400px;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 5px 5px 5px #0000005e;
    animation: 2s ${props => props.card == true ? "anim_card1" : "anim_card2"} ease-in-out;
    animation-fill-mode: both;
    position: absolute;
    bottom: -80vh;
    z-index: 1;

    @keyframes anim_card1 {

        0%{
            transform: rotate(-30deg);
        }

        90%{
            bottom: 55vh;
        }

        100%{
            bottom: 35vh;
            box-shadow: 45px 45px 45px #0000005e;
            background-image: linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0));
        }
        
    }

    @keyframes anim_card2 {

        0%{
            
            bottom: 35vh;
            box-shadow: 45px 45px 45px #0000005e;
            bottom: 35vh;
            box-shadow: 45px 45px 45px #0000005e;
            background-image: linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0));
            
        }

        20%{
            bottom: 55vh;
        }

        100%{
            transform: rotate(-30deg);
        }

    }

    blockquote{
        text-align: center;
        font-size: 16pt;
    }

`