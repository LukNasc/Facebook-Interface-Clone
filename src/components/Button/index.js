import React from 'react';

import { Text } from 'react-native';

import { Container, Buttons } from './styles';

const Button = ({ text, icons = null }) => (
    <Container>
        <Buttons>
            <Text>{text}</Text>
        </Buttons>
    </Container>
);

export default Button;
