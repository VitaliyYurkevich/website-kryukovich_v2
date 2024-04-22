import React from 'react';
import {MyContainer} from "../../../components/MyContainer";
import styled from "styled-components";
import {Skill} from "./Skill";
import {theme} from "../../../style/Theme";
import {AttentionSeeker, Fade} from "react-awesome-reveal";
import {fadeInDown} from "react-awesome-reveal/dist/animations/fading_entrances";
import {flash} from "react-awesome-reveal/dist/animations/attention_seekers";

export const Skills = () => {
    return (
        <StyledWrapperBackground>
            <MyContainer>
                <StyledSkills  id={'Опыт'}>
                    <Fade direction={'down'} >
                        <Skill text={'лет собственных'} goldenText={'тренировок'} count={20}/>
                        <Skill text={'пытавшихся'} count={1000} goldenText={'начать'}/>
                        <Skill text={'начатых'} count={100} goldenText={'тренироваться'}/>
                    </Fade>
                </StyledSkills>
            </MyContainer>
        </StyledWrapperBackground>
    );
};

const StyledSkills = styled.section`
  /*min-height: 40vh;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  padding-top: 130px;*/
  min-height: 40vh;
  display: flex;
  justify-content: space-around;
  //gap: 20px
  
  
  @media ${theme.media.tablet} {
     justify-content: space-between;
    gap: 10px;
    
  }
`


const StyledWrapperBackground = styled.div`
  background: linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgb(10, 10, 10) 50%);

`