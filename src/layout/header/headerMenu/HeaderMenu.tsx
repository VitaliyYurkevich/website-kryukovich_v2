import React from 'react';
import styled from "styled-components";
import {Initials} from "../initials/initials";
import {theme} from "../../../style/Theme";
import {Contact} from "../contact/Contact";



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


export const HeaderMenu = () => {

    return (
        <StyledHeaderMenu>
            <ul>
                {items.map((i, index) => {
                    return (
                        <li>
                            <Link href={`#${i.href}`}>
                                {i.title}
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
      gap: 10px;
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
