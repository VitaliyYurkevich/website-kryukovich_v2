import React from 'react';
import styled from "styled-components";

export const Initials = () => {
    return (
        <StyledInitials>
            Крюкович Дмитрий <br/> Персональный тренер
        </StyledInitials>
    );
};


export const StyledInitials = styled.div `
    color: white;
    opacity: 0.5;
`