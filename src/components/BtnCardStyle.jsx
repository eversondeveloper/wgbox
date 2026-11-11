import styled, { css, keyframes } from "styled-components";

const animAbrir = (scale) => keyframes`
  0% {
    transform: scale(${scale}) translate(0%, 190%) rotateY(0deg);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
  }
  100% {
    transform: scale(1) translate(0%, 0%) rotateY(3600deg);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.55), 0 8px 20px -6px rgba(0, 0, 0, 0.35);
  }
`;

const animFechar = (scale) => keyframes`
  0% {
    transform: scale(1) translate(0%, 0%) rotateZ(0deg);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.55), 0 8px 20px -6px rgba(0, 0, 0, 0.35);
  }
  40% {
    transform: scale(0.98) translate(0%, -12%) rotateZ(-6deg);
    box-shadow: 0 18px 32px rgba(0, 0, 0, 0.4);
  }
  100% {
    transform: scale(${scale}) translate(0%, 190%) rotateZ(0deg);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35);
  }
`;

export const BtnCardStyle = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .aside1 {
    width: 25%;
    height: 100dvh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #8a8a8a;
    padding: 0 20px;

    div {
      width: 100%;
    }

    p {
      margin-bottom: 20px;
      line-height: 1.5;
    }

    a {
      color: #feb000;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: #ffd059;
      }
    }
  }

  .aside2 {
    width: 25%;
    height: 100dvh;
    color: #8a8a8a;
    padding: 0 20px 0 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: 0.3s ease;

    p {
      margin-bottom: 16px;
      line-height: 1.45;
      font-size: 0.92rem;
    }

    button {
      border: none;
      width: 100%;
      height: 38px;
      background-color: #feb000;
      color: #141016;
      font-weight: bold;
      border-radius: 6px;
      cursor: pointer;
      transition: background-color 0.2s ease, transform 0.15s ease;

      &:hover {
        background-color: #ffbf2e;
      }

      &:active {
        transform: scale(0.98);
      }
    }
  }

  .mainGeral {
    width: 50%;
    height: 100dvh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    perspective: 1200px;
  }

  @media (max-width: 1100px) {
    .aside1,
    .aside2 {
      display: none;
    }

    .mainGeral {
      width: 100%;
    }
  }
`;

export const CardItem = styled.div`
  width: 90%;
  max-width: 400px;
  height: 220px;
  border-radius: 14px;
  position: absolute;
  cursor: pointer;
  user-select: none;
  caret-color: transparent;
  transform: scale(${(props) => props.$scale}) translate(0%, 190%);
  transform-style: preserve-3d;
  z-index: ${(props) => (props.$isActive ? 20 : props.$zIndex)};
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease;

  ${(props) =>
    props.$hasInteracted &&
    css`
      animation: ${props.$isActive ? "5s" : "1s"}
        ${props.$isActive ? animAbrir(props.$scale) : animFechar(props.$scale)}
        ${props.$isActive
          ? "cubic-bezier(0.08, 0.82, 0.17, 1)"
          : "cubic-bezier(0.22, 1, 0.36, 1)"}
        both;
    `}

  &:hover {
    ${(props) =>
      !props.$isActive &&
      css`
        transform: scale(${props.$scale}) translate(0%, 183%);
      `}
  }
`;

const faceBase = css`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 26px 22px 22px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  user-select: none;
  caret-color: transparent;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bg};
  background-image: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.22) 0%,
    rgba(255, 255, 255, 0.04) 45%,
    rgba(0, 0, 0, 0.08) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.22);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25);
`;

export const CardFront = styled.div`
  ${faceBase}
  transform: rotateY(0deg);

  blockquote {
    text-align: center;
    font-size: 1.2rem;
    line-height: 1.45;
    user-select: none;

    strong {
      display: block;
      margin-top: 8px;
      font-size: 0.95rem;
      opacity: 0.85;
    }
  }
`;

export const CardBack = styled.div`
  ${faceBase}
  transform: rotateY(180deg);
`;

export const CardNumber = styled.div`
  position: absolute;
  top: 14px;
  right: calc(100% + 14px);
  display: flex;
  align-items: center;
  gap: 8px;
  transform: scale(${(props) => 1 / props.$scale});
  transform-origin: right center;
  opacity: ${(props) => (props.$isActive ? 0 : 1)};
  transition: opacity 0.2s ease;
  pointer-events: none;
  user-select: none;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: #feb000;
    color: #141016;
    font-size: 1rem;
    font-weight: 800;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.45);
  }

  &::after {
    content: "➜";
    color: #feb000;
    font-size: 1.25rem;
    line-height: 1;
    text-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  }
`;