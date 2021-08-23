import styled, { css } from "styled-components";

const customButtonStyles = css`
  background-color: black;
  color: white;
  border: none;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: cubic-bezier(0.215, 0.61, 0.355, 1);
    transition-duration: 2s;
  }
`;

const invertedStyles = css`
  background-color: coral;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: coral;
    border: none;
  }
`;

const googleSignIn = css`
  background-color: #428;
  color: #fff;

  &:hover {
    background-color: #455;
    border: none;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSignIn;
  }

  return props.inverted ? invertedStyles : customButtonStyles;
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 12px;
  text-transform: uppercase;
  font-family: "Courier New";
  font-weight: bolder;
  cursor: pointer;
  display: flex;
  justify-content: center;

  ${getButtonStyles}
`;
