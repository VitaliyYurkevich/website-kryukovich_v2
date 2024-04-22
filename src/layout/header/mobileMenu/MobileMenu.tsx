import React, {MouseEventHandler, useState} from 'react';
import styled, {css} from "styled-components";
import {theme} from "../../../style/Theme";
import {Link} from "react-scroll";

export const MobileMenu = () => {

    const items = [
        {
            title: "Опыт",
            href: "Опыт"
        },
        {
            title: "Обо мне",
            href: "Обо мне"
        },
        {
            title: "Типы тренировок",
            href: "Типы тренировок"
        },
        {
            title: "Контакты",
            href: "Контакты"
        },
        /*{
            title: "+7(905)201-22-37",
            href: "tel:+79052012237"
        },*/
    ]


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
                    {items.map((i, index) => {
                        return (
                            <li>
                                <NavLink offset={-90} activeClass='active' smooth={true} spy={true} to={i.href} >
                                    <StyledMask>
                                        <span>
                                           {i.title}
                                        </span>
                                    </StyledMask>
                                </NavLink>
                            </li>
                        )
                    })}
                    <NavLink to={"tel:+79052012237"} >+7(905)201-22-37</NavLink>
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
  background-color: rgba(0, 0, 0, 0.8);
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
    font-style: normal;
  }
`


const NavLink = styled(Link)`
  //color: var(--text, #BDEBEA);
    /*&:active {
    ${MobileMenuWrapper} {
      display: none;
    }
  }*/
  font-family: Poppins, sans-serif;
  font-size: 20px;
  font-style: normal;
  //color: white;
  font-weight: 500;
  color: white;

  &.active {
    span {
      color: gold;
    }

  }

`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 190px;
  height: 190px;
  z-index: 999999;
  background-color: rgba(255, 255, 255, 0);
  border: 0;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: gold;
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
      background-color: gold;
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
      background-color: gold;
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