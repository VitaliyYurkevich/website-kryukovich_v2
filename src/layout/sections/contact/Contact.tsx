import React, {ElementRef, useRef} from 'react';
import styled from "styled-components";
import {SectionsTitle} from "../../../components/SectionsTitle";
import {MyContainer} from "../../../components/MyContainer";
import {MyButton} from "../../../components/button/MyButton";
import {theme} from "../../../style/Theme";
import BackgroundImageContact from "../../../assets/images/BackGroundImageContact.jpg";
import {Fade} from "react-awesome-reveal";
import emailjs from '@emailjs/browser';
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {debuglog} from "util";

export const Contact = () => {

    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        if(!form.current) return


        emailjs
            .sendForm('service_ipg8qlg', 'template_nnt01mg', form.current, {
                publicKey: '_Oq2Znpcmcz37CG9t',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
        e.target.reset()
    };


    return (
        <BackImageWrapper>
            <StyledContacts id={'Контакты'}>
                <MyContainer>
                        <SectionsTitle>Контакты</SectionsTitle>
                    <StyledForm ref={form} onSubmit={sendEmail}>
                    <FieldWrapper>
                            <StyledTitle >ФИО</StyledTitle>
                            <Field required placeholder={'Имя'} name='subject'/>
                            <StyledTitle>Номер телефона</StyledTitle>
                            <Field required placeholder={'Телефон'} name='numberPhone'/>
                            <StyledTitle>Описание</StyledTitle>
                            <Field required placeholder={'Введите текст'} as={'textarea'} name='message'/>
                    </FieldWrapper>
                                <MyButton title={'Отправить'} type={'submit'} />
                        </StyledForm>
                </MyContainer>
            </StyledContacts>
        </BackImageWrapper>
    );
};


const StyledContacts = styled.section`
  background: linear-gradient( to top, rgba(0, 0, 0, 0) 90%, rgba(0, 0, 0, 1) 100%);
`

const StyledForm = styled.form`
  max-width: 445px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 190px;
  }
`

const Field = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #E8ECF4;
  background-color: var(--bg-white, #FFF);
  margin-bottom: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0.05em;
  //color: white;
  padding: 7px 15px;
  
  &::placeholder {
    color: ${theme.colors.placeholderColor};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1px solid #E8ECF4;
  }
`

const FieldWrapper = styled.div`
  width: 100%;
`

const StyledTitle = styled.div`
  //background-color: aqua;
  margin-bottom: 8px;
  color: white;
`

const BackImageWrapper = styled.div`
  background-image: linear-gradient( to bottom, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 1) 80%), url(${BackgroundImageContact});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  //object-fit: cover;
`