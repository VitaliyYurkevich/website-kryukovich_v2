import React from 'react';
import styled from "styled-components";
import {MyContainer} from '../../../components/MyContainer';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {MyButton} from "../../../components/button/MyButton";
import PhotoMain from "../../../assets/images/KryukovichMainPhotoZipp.png"
import BackGroundImageMain from "../../../assets/images/BackgroundImageMain.jpg"
import {theme} from "../../../style/Theme";
import {font} from "../../../style/Common";
import 'animate.css';
import {Fade} from "react-awesome-reveal";

export const Main = () => {
    return (
        <BackImageWrapper>
            <StyledMain>
                <MyContainer>
                    <FlexWrapper align={'center'} justify={'space-around'} wrap={'wrap'}>
                        <div>
                            <Fade direction={'right'}>
                                <MainTitle>Построй тело <br/> <GoldTextTitle>своей мечты</GoldTextTitle></MainTitle>
                            </Fade>
                            <Fade direction={'left'}>
                                <WrapperSmallText>
                                    <div >
                                        <SmallText > Всего за месяц тренировок</SmallText>
                                        <SmallText> Закажи БЕСПЛАТНУЮ консультацию, чтобы узнать,<br/>
                                            за сколько дней мы достигнем твоей цели
                                        </SmallText>
                                    </div>
                                </WrapperSmallText>
                            </Fade>
                            <ButtonWrapper>
                                <MyButton title={'Заказать консультацию'}/>
                                <MyButton title={'Заказать консультацию'} buttonColor={'white'}/>
                            </ButtonWrapper>
                        </div>
                        <PhotoWrapper>
                            <Fade direction={'right'}>
                                <Photo src={PhotoMain}/>
                            </Fade>
                            <DivClass></DivClass>
                        </PhotoWrapper>
                    </FlexWrapper>
                </MyContainer>
            </StyledMain>
        </BackImageWrapper>
    );
};


const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
  /*max-width: 1170px;
  width: 100%;*/
`

const BackImageWrapper = styled.div`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 80%), url(${BackGroundImageMain});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media ${theme.media.mobile} {
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 1) 90%), url(${BackGroundImageMain});
    background-position: left;
  }
  //object-fit: cover;
`

const MainTitle = styled.h1`
  ${font({weight: 700, Fmax: 70, Fmin: 40})}
  font-size: 70px;
  //font-weight: 700;
  letter-spacing: 1px;
  margin-left: 40px;
  color: goldenrod;
  font-family: 'Segoe UI', sans-serif;
  @media ${theme.media.mobile} {
     margin-left: 45px;
     font-size: 40px;
    }
`

const WrapperSmallText = styled.span`
  display: flex;
  flex-direction: column;
  border-left: 3px solid;
  padding: 0 30px;
  color: white;
  margin-left: 30px;
`

const SmallText = styled.h2`
  // #fcc480;
  ${font({weight: 700, Fmax: 20, Fmin: 15})}
  color: #ffffff;
  padding-top: 40px;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.5px;
  font-family: 'Segoe UI', sans-serif;
`


const DivClass = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8%; /* Высота затемнения */
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 50%);
  @media ${theme.media.mobile} {
   margin-bottom: -18px
  }
`

const PhotoWrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top: 15px;

  
  @media ${theme.media.mobile} {
    width: 290px;
    height: 380px;
    top: 17px;
    left: -20px
  }
`

const Photo = styled.img`

  animate__animated {
    
  }
  
  
  //display: block;
  max-width: 550px;
  width: 100%;
  height: 700px;
  object-fit: cover;
  
  //background-color: darkblue;
  @media ${theme.media.mobile} {
    width: 310px;
    height: 390px;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  padding-top: 30px;
  margin-left: 40px;
  justify-content: space-between;
  gap: 20px;

  @media ${theme.media.mobile} {
    margin-left: 20px;
  }
`


const GoldTextTitle = styled.p`
  color: #ffffff;
`



//#fc5434;