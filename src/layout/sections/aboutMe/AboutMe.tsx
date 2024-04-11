import React from 'react';
import {MyContainer} from "../../../components/MyContainer";
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import BackGroundImageAboutMe from "../../../assets/images/BackGroundImageAboutMe.jpg";
import PhotoAbout from "../../../assets/images/KryukovichAboutMePhoto (1).png"
import {theme} from "../../../style/Theme";
import {font} from "../../../style/Common";

export const AboutMe = () => {

    return (
        <BackImageWrapper>
            <StyledAboutMe>
                <MyContainer>
                    <StyledTitle>
                        <AboutMeTitle>Обо мне</AboutMeTitle>
                    </StyledTitle>
                    <StyledWrapper>
                        <PhotoWrapper>
                            <Photo src={PhotoAbout}/>
                            <DivClass></DivClass>
                        </PhotoWrapper>
                        <StyledText>
                            <p>Приятно познакомиться меня зовут <GoldSpan>Крюкович Дмитрий.</GoldSpan> <br/>
                                Я сертифицированный <GoldSpan>фитнес тренер с опытом более 6 лет.</GoldSpan>
                            </p>
                            <p>
                                Моя жизнь всегда была связана <GoldSpan>со спортом и правильным
                                питанием.</GoldSpan> Благодаря такой жизненной позции <GoldSpan>я многого </GoldSpan>
                                достиг.
                            </p>
                            <p>
                                Я убежден в том, <GoldSpan>что здоровый образ жизни делает
                                человека не только привлекательным, но и счастливым. </GoldSpan>
                                Именно поэтому я полностью отдаюсь своей работе
                                и жду того же от своих клиентов.
                            </p>
                            <p>
                                За моей спиной <GoldSpan>более 6 лет успешного опыта в роли
                                фитнес-тренера. </GoldSpan>
                            </p>
                        </StyledText>
                    </StyledWrapper>
                </MyContainer>
            </StyledAboutMe>
        </BackImageWrapper>
    );
};

const GoldSpan = styled.span`
  color: goldenrod;
`

const AboutMeTitle = styled.h2`
  ${font({weight: 700, Fmax: 70, Fmin: 40})}
  font-size: 70px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  
  @media ${theme.media.mobile} {
    text-align: center;
    font-size: 45px;
  }
`

const StyledAboutMe = styled.section`
  min-height: 100vh;
  background: linear-gradient(to top, rgba(0, 0, 0, 0) 80%, rgb(10, 10, 10) 100%);
`

const StyledTitle = styled.div`
  height: 80px;
  color: white;
  margin-bottom: 100px;

  @media ${theme.media.mobile} {
    margin-bottom: 20px;
  }
  //border: 1px solid red;
`
const StyledText = styled.div`
  ${font({weight: 700, Fmax: 25, Fmin: 15})}
  font-size: 25px;
  color: white;
  font-family: 'Segoe UI', sans-serif;
  
  p {
    padding: 10px;
  }

  max-width: 600px;
  @media ${theme.media.mobile} {
    font-size: 15px;
    text-align: center;
  }
`

const BackImageWrapper = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 80%), url(${BackGroundImageAboutMe});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  //object-fit: cover;
`

const PhotoWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  //s
`

const DivClass = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 15%; /* Высота затемнения */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1) 80%);
`

const Photo = styled.img`
  width: 600px;
  height: 700px;
  object-fit: cover;
  margin-right: 40px;
  //background-color: darkblue;
  //border: 1px solid red;
  @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
    padding-top: 10px;
  }
`
const StyledWrapper = styled.div`
  display: flex;
  padding-bottom: 80px;

  @media ${theme.media.tablet} {
    flex-direction: column-reverse;
  }
`
