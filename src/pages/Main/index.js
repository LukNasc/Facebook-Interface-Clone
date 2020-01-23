import React, { Component } from 'react';
import { ScrollView } from 'react-native'

import { Container, BoxStatus, BoxMedias, FieldStatus, ImageProfile } from './styles';

import Button from '../../components/Button'
import Storys from '../../components/Storys'
import Content from '../../components/Content'

import Profile from '../../assets/profile.png';
export default class Main extends Component {
    render() {
        return (
            <Container>
                <ScrollView>

                    <BoxStatus>
                        <ImageProfile source={Profile} />
                        <FieldStatus
                            placeholder="O que você está pensando?"
                        />
                    </BoxStatus>
                    <BoxMedias>
                        <Button text="Ao Vivo" icon="video" colorIcon="#ff2121" />
                        <Button text="Foto" icon="image" colorIcon="#03bd00" />
                        <Button text="Check-in" icon="map-pin" colorIcon="#ff086f" />
                    </BoxMedias>
                    <Storys />
                    <Content />
                </ScrollView>
            </Container >
        );
    }
}
