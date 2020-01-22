import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, BoxStatus, BoxMedias, FieldStatus, ImageProfile } from './styles';

import Button from '../../components/Button'

import Profile from '../../assets/profile.png';
export default class Main extends Component {
    render() {
        return (
            <Container>
                <BoxStatus>
                    <ImageProfile source={Profile} />
                    <FieldStatus
                        placeholder="O que você está pensando?"
                    />
                </BoxStatus>
                <BoxMedias>
                    <Button text="Ao Vivo"/>
                    <Button text="Foto"/>
                    <Button text="Localização"/>
                </BoxMedias>
            </Container>
        );
    }
}
