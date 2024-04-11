import React, {MouseEventHandler, useState} from 'react';
import styled, {css} from "styled-components";
import {HeaderMenuPropsType} from "../headerMenu/HeaderMenu";
import {theme} from "../../../style/Theme";

export const MobileMenu = (props: HeaderMenuPropsType) => {

    const [isOpen, setIsOpen] = useState(false)

    const onClickHandler = () => {
        setIsOpen(!isOpen)
    }

    return (
        <StyledMobileMenu>
            <BurgerButton onClick={onClickHandler} isOpen={isOpen}>
                <span></span>
            </BurgerButton>
            <MobileMenuWrapper onClick={onClickHandler} isOpen={isOpen}>
                <ul>
                    {props.items.map((i, index) => {
                        return (
                            <li>
                                <Link href={''}>
                                    <StyledMask>
                                        <span>
                                           {i}
                                        </span>
                                    </StyledMask>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </MobileMenuWrapper>
        </StyledMobileMenu>
    );
};


export const StyledMobileMenu = styled.nav`
  display: none;
  @media ${theme.media.tablet} {
    display: block;
  }
`

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.95);
  display: none;
  

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`


const Link = styled.a`
  //color: var(--text, #BDEBEA);

  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-style: normal;
  //color: white;
  font-weight: 500;
  
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 190px;
  height: 190px;
  z-index: 999999;
  background-color: rgba(255, 255, 255, 0);

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: #ff0000;
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: '';
      display: block;
      width: 36px;
      height: 2px;
      background-color: #fa0000;
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}

    }

    &::after {
      content: '';
      display: block;
      width: 24px;
      height: 2px;
      background-color: #fa0000;
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
  }
`

const StyledMask = styled.span`
color: white;
  font-weight: bold;
  
`