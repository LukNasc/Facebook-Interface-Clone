import React from 'react';
import LinearGradient from 'react-native-linear-gradient'
import Feather from 'react-native-vector-icons/Feather'


import { Text } from 'react-native';

import { Container, Buttons, ContentButton } from './styles';

const Button = ({ text, icon = "", colorIcon = "#000", onPress = () => { }, style = null }) => (
    <Container>
        <Buttons onPress={onPress} underlayColor="#ccc" style={style}>
            <ContentButton>
                <Feather name={icon} size={20} color={colorIcon}
                    style={
                        {
                            margin: 5
                        }
                    }
                />
                <Text>{text}</Text>
            </ContentButton>
        </Buttons>
        <LinearGradient
            colors={['white', 'grey', 'white']}
            start={{ x: 1.0, y: 0.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
                height: 40,
                width: 0.5
            }}
        />
    </Container>
);

export default Button;
