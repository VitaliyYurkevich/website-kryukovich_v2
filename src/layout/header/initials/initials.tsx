import React from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";

export const Initials = () => {
    return (
        <StyledInitials>
         <NavLink smooth={true} to={'main'}> Крюкович Дмитрий <br/> Персональный тренер</NavLink>
        </StyledInitials>
    );
};


export const StyledInitials = styled.div `
    color: white;
    opacity: 0.5;
    
  
`

const NavLink = styled(Link)`
  color: white;
`