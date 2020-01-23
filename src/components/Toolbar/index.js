import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import Fontisto from 'react-native-vector-icons/Fontisto'

import { Image } from 'react-native';

import { Container } from './styles';


import Logo from '../../assets/logo.png';
const Toolbar = () => (
    <Container>
        <Image source={Logo}
            resizeMode='contain'
            style={{
                marginRight: '50%'
            }}
        />
        <FontAwesome name="search" size={25} color="#ccc" />
        <Fontisto name="messenger" size={25} color="#ccc" style={{
            flex: 1,
            marginLeft: 10,
        }} />
    </Container>
);

export default Toolbar;
