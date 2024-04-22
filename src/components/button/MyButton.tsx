import React from 'react';
import styled from "styled-components";
import {theme} from "../../style/Theme";
import {Fade} from "react-awesome-reveal";


type MyButtonPropsType = {
    title: string
    buttonColor?: string
    type?: "button" | "submit" | "reset" | undefined
}


export const MyButton = (props: MyButtonPropsType) => {

    return (

            <ButtonStyled type={props.type} $buttonColor={props.buttonColor}>
                {props.title}
            </ButtonStyled>

    );
};


const ButtonStyled = styled.button<{ $buttonColor?: string; }>`
  background: ${props => props.$buttonColor || 'radial-gradient(circle, rgba(250,191,121,1) 0%, rgba(252,161,31,1) 100%)'};
  width: 100%;
  height: 55px;
  cursor: pointer;
  border: 0;
  box-shadow: 0 0 5px #ffffff;
  font-size: 18px;
  color: black;
  font-weight: bold;
  
  animation: fadeIn;
  animation-duration: 2s;
  
  @media ${theme.media.mobile} {
    
  }
  
  :hover {
    box-shadow: 0 0 30px #ffffff;
    transition-duration: 1s;
  }
  
`