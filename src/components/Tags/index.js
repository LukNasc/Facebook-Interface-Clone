import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'
import { Container, BoxTag, Bold } from './styles';

export default class Tags extends Component {
    state = {
        data: this.props.tags
    }
    render() {
        return (
            <Container >
                <FlatList
                    data={this.state.data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <BoxTag style={
                            item.id === 1 ?
                                { marginLeft: 20 }
                                :
                                {}
                        }>
                            <FontAwesome name={item.icon} size={15} color="black" style={{ marginRight: 5 }} solid />
                            {
                                item.tag ? (<Text><Bold>{item.tag}</Bold></Text>) : (null)
                            }
                        </BoxTag>
                    )}
                />
            </Container>);
    }
}
