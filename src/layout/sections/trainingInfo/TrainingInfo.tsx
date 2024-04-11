import React from 'react';
import {MyContainer} from "../../../components/MyContainer";
import {TrainingCard} from "./trainingCard/TrainingCard";
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import img1 from "../../../assets/images/trainingInfo/imgTrainingInfo_PP.png"
import img2 from "../../../assets/images/trainingInfo/imgTrainingInfo_body_building.jpg"
import img3 from "../../../assets/images/trainingInfo/imgTrainingInfo_PowerStamina.jpg"
import img4 from "../../../assets/images/trainingInfo/imgTrainingInfo_GeneralPhysical.png"
import img5 from "../../../assets/images/trainingInfo/imgTrainingInfo_ManAndWoman.png"
import img6 from "../../../assets/images/trainingInfo/atlet.jpg"
import BackgroundImageTrainingInfo from "../../../assets/images/trainingInfo/BackgroundImageTrainingInfo.jpg";
import {font} from "../../../style/Common";
import {theme} from "../../../style/Theme";



export const TrainingInfo = () => {

    return (
        <BackImageWrapper>
            <StyledTrainingInfo>
                <MyContainer>
                    <StyledTitle>
                        <TrainingInfoTitle>Типы <GoldTextTitle>тренировок</GoldTextTitle> </TrainingInfoTitle>
                    </StyledTitle>
                    <FlexWrapper wrap={'wrap'} justify={'space-around'} >
                        <TrainingCard img={img1} cardTitle={'Питание'} cardText={'Составление диет, рекомендации по использованию спортивного питания'} />
                        <TrainingCard img={img2} cardTitle={'Бодибилдинг'} cardText={'Наращивание сухой мышечной массы'} />
                        <TrainingCard img={img3} cardTitle={'Функциональный'} cardText={'Тренинг с упором на силу и выносливость'} />
                        <TrainingCard img={img4} cardTitle={'Физподготовка'} cardText={'Общая физическая подготовка и техника выполнения упражнений'} />
                        <TrainingCard img={img5} cardTitle={'Спецификация'} cardText={'Мужской и женский фитнес, снижениец процента жира в организме'} />
                        <TrainingCard img={img6} cardTitle={'Культуризм'} cardText={'Составление плана по достижению целей'} />
                    </FlexWrapper>
                </MyContainer>
            </StyledTrainingInfo>
        </BackImageWrapper>
    );
};

const StyledTrainingInfo = styled.section`
  min-height: 100vh;
  background: linear-gradient( to top, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 1) 100%);
`

const StyledTitle = styled.div`
 color: white;
  font-family: 'Segoe UI', sans-serif;
  margin-bottom: 100px;

  @media ${theme.media.mobile} {
    margin-bottom: 60px;
  }
`

const GoldTextTitle = styled.span`
color: goldenrod;
  font-family: 'Segoe UI', sans-serif;
`


const StyledWrapper = styled.div`

`

const TrainingInfoTitle = styled.h2`
  ${font({weight: 700, Fmax: 70, Fmin: 40})}
  font-size: 70px;
  font-family: 'Segoe UI', sans-serif;
  text-align: center;
  
  @media ${theme.media.mobile} {
    text-align: center;
    font-size: 45px;
  }
`

const BackImageWrapper = styled.div`
  background-image: linear-gradient( to bottom, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 80%), url(${BackgroundImageTrainingInfo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  //object-fit: cover;
`

const DivClass = styled.div`
  width: 100%;
  height: 200px;
  background-color: goldenrod;
  
`