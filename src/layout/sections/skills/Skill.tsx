import React from 'react';
import styled from "styled-components";
import {theme} from "../../../style/Theme";

type SkillPropsType = {
    count: number
    text: string
    goldenText: string
}


export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <StyledCircle><p> {props.count} </p></StyledCircle>
            <StyledTextSkill><p> {props.text} </p></StyledTextSkill>
            <StyledGoldenText><p> {props.goldenText} </p></StyledGoldenText>
        </StyledSkill>
    );
};


const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  //position: relative;
  align-items: center;
  
 // animation: fadeInDown;
 // animation-duration: 3s;
  
  ${theme.media.tablet} {
    flex-direction: row;
  }
`

const StyledCircle = styled.div`
  background: radial-gradient(circle, rgba(250, 191, 121, 1) 0%, rgba(252, 161, 31, 1) 100%);
  border-radius: 50%;
  height: 8em;
  width: 8em;
  box-shadow: 0 0 20px #fcd000;
 @media ${theme.media.mobile} {
    height: 6.5em;
    width: 6.5em;
  }

  p {
    text-align: center;
    margin-top: 28px;
    font-size: 50px;
    font-weight: bold;
    @media ${theme.media.mobile} {
      text-align: center;
      font-size: 42px;
      font-weight: bold;
    }
  }
`

const StyledTextSkill = styled.div`
  margin-top: 40px;
  color: white;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`

const StyledGoldenText = styled.div`
  color: goldenrod;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  @media ${theme.media.mobile} {
    font-size: 16px;
  }
`
