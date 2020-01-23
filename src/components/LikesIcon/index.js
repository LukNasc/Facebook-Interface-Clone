import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

import { Container, Content } from './styles';

const LikesIcon = () => (
    <Container>
        <Content>
            <FontAwesome name="thumbs-up" size={10} color="#fff" />
        </Content>
    </Container>
);

export default LikesIcon;
