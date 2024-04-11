import React from 'react';
import styled from "styled-components";



type TrainingCardPropsType = {
    img: string
    cardText: string
    cardTitle: string
}

export const TrainingCard = (props: TrainingCardPropsType) => {

    return (
            <StyledTrainingCard>
                <StyledTrainingCircle height={200} width={200} src={props.img}/>
                <StyledTrainingTitle>
                    <StyledWrapperTitle>
                        {props.cardTitle}
                    </StyledWrapperTitle>
                    <StyledTrainingText>
                        {props.cardText}
                    </StyledTrainingText>
                </StyledTrainingTitle>
            </StyledTrainingCard>
    );
};


const StyledTrainingCard = styled.div`
  display: flex;
  width: 340px;
  height: 350px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

const StyledTrainingCircle = styled.img`
  border-radius: 50%;
`

const StyledWrapperTitle = styled.div`
  font-weight: bold;
  text-transform: uppercase;
`

const StyledTrainingTitle = styled.span`
  color: goldenrod;
  display: flex;
  justify-content: space-around;
  min-height: 140px;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', sans-serif;
  font-size: 20px;
`

const StyledTrainingText = styled.p`
  text-align: center;
  letter-spacing: 0.5px;
  padding-bottom: 30px;
  color: white;
  font-family: 'Segoe UI', sans-serif;
`

