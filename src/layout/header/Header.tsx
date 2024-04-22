import React from 'react';
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import styled from "styled-components";
import {Initials} from "./initials/initials";
import { MyContainer } from '../../components/MyContainer';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Contact} from "./contact/Contact";
import {theme} from "../../style/Theme";
import {MobileMenu} from "./mobileMenu/MobileMenu";

export const Header = () => {

    let items = ['Опыт', 'Обо мне', 'Типы тренировок', 'Контакты']

    return (
        <StyledHeader>
            <MyContainer>
                <FlexWrapper justify={'space-evenly'} align={'center'}>
                    <Initials />
                    <HeaderMenu />
                    <MobileMenu />
                    <Contact />
                </FlexWrapper>
            </MyContainer>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
  background: rgb(38, 40, 40, 0.6);
  padding: 20px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  //opacity: 0.6;
  
  

  @media ${theme.media.tablet} {
   
  }

  @media ${theme.media.mobile} {
    ${FlexWrapper} {
      justify-content: center;
    }
  }
`