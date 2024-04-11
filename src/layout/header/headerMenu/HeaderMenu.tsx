import React from 'react';
import styled from "styled-components";
import {Initials} from "../initials/initials";
import {theme} from "../../../style/Theme";

export type HeaderMenuPropsType = {
    items: Array<string>
}

export const HeaderMenu = (props: HeaderMenuPropsType) => {

    return (
        <StyledHeaderMenu>
            <ul>
                {props.items.map((i, index) => {
                    return (
                        <li>
                            <Link href={''}>
                                {i}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </StyledHeaderMenu>
    );
};


export const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 100px;
    justify-content: space-between;

    @media ${theme.media.tablet} {
      gap: 20px;
      display: none;
    }
    
    @media ${theme.media.mobile} {
      gap: 20px;
    }
  }
  
  
`

const Link = styled.a`
  //color: var(--text, #BDEBEA);
  
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
`
