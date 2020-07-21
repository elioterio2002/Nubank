import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Logo, Top, Title} from './styles';
import LogoImg from '../../assets/Nubank_Logo.png'

export default function Header(){
    return(
        <Container>
            <Top>
                <Logo source={LogoImg}></Logo>
                <Title>Silvestre Carlos</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF"></Icon>
        </Container>
    );
}