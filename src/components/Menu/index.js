import React from 'react';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container, Code, Nav, NavItem, NavText, SignOutButton, SignOutButtonText} from './styles';

export default function Menu({translateY}){
    return(
        <Container style={{
            opacity: translateY.interpolate({
                inputRange: [0,150],
                outputRange: [0,1],
            }),
        }}
        >
            <Code>
                <QRCode 
                    value="www.portaldaindustria.com.br/senai"
                    size = {80}
                    fgColor = "#fff"
                    bgColor = "#8B10AE"
                />
            </Code>
            <Nav>
                <NavItem>
                    <Icon name="help-outline" size={20} color="#FFF"></Icon>
                    <NavText>Me Ajuda</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="person-outline" size={20} color="#FFF"></Icon>
                    <NavText>Perfil</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="setting-outline" size={20} color="#FFF"></Icon>
                    <NavText>Configurar Conta</NavText>
                </NavItem>
                <NavItem>
                    <Icon name="credit-card" size={20} color="#FFF"></Icon>
                    <NavText>Configurar Cartão</NavText>
                </NavItem>
            </Nav>
            <SignOutButton onPress={()=>{}}>
                <SignOutButtonText>SAIR</SignOutButtonText>
            </SignOutButton>
        </Container>
    );
}