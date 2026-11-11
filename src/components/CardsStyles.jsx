import styled, { keyframes } from "styled-components";

const animCard1 = keyframes`
  0% {
    transform: rotate(-30deg);
  }
  90% {
    bottom: 55vh;
  }
  100% {
    bottom: 35vh;
    box-shadow: 45px 45px 45px #0000005e;
    background-image: linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0));
  }
`;

const animCard2 = keyframes`
  0% {
    bottom: 35vh;
    box-shadow: 45px 45px 45px #0000005e;
    background-image: linear-gradient(rgba(0, 0, 0, 0.288), rgba(0, 0, 0, 0));
  }
  20% {
    bottom: 55vh;
  }
  100% {
    transform: rotate(-30deg);
  }
`;

export const CardsStyled = styled.div`
  color: #a7a7a7;
  border: ${(props) => props.$corCardBorda || "#00000052 solid 1px"};
  background-color: ${(props) => props.$corCardBack || "#2c2c2c"};
  height: auto;
  width: 90%;
  max-width: 400px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 5px #0000005e;
  animation: 2s ${(props) => (props.$card ? animCard1 : animCard2)} ease-in-out both;
  position: absolute;
  bottom: -80vh;
  z-index: 1;

  blockquote {
    text-align: center;
    font-size: 1.25rem;
  }
`;