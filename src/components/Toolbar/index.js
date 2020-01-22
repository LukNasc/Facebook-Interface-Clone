import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

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
        <FontAwesome name="search" size={25} color="#ccc"  />
        <FontAwesome name="facebook-messenger" size={25} color="#ccc" style={{
            flex: 1,
            marginLeft: 10,
        }}/>
    </Container>
    );

export default Toolbar;
