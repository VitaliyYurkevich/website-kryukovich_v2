import React from 'react';
import styled from "styled-components";
import {theme} from "../../../style/Theme";

export const Contact = () => {
    return (
        <StyledContact>
          <a href="tel:+79052012237">+7(905)201-22-37</a>
        </StyledContact>
    );
};


export const StyledContact = styled.div `

  color: white;
  
  a {
    color: white;
  }

  @media ${theme.media.tablet} {
      display: none;
  }
`