import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'


import { Container, Button, Text } from './styles';


const ButtonActionsPost = ({ text, icon = "" }) => (
    <Container>
        <Button underlayColor="#eee" onPress={()=>{}}>
            <>
                <FontAwesome name={icon} size={20} color='#ccc' />
                <Text>
                    {text}
                </Text>
            </>
        </Button>
    </Container>
);

export default ButtonActionsPost;
