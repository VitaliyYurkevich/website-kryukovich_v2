import React from 'react';
import styled from "styled-components";
import {theme} from "../../style/Theme";

type MyButtonPropsType = {
    title: string
    buttonColor?: string

}


export const MyButton = (props: MyButtonPropsType) => {

    return (
        <ButtonStyled $buttonColor={props.buttonColor}>
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
  
  @media ${theme.media.mobile} {
    
  }
  
`