import styled from "styled-components";

export const AppStyled = styled.div`
  background-color: ${(props) => props.$corBack};
  width: 100%;
  min-height: 100dvh;
  font-family: ${(props) => props.$fontsGeral};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  overflow-x: hidden;
`;