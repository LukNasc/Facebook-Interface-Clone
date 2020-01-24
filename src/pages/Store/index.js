import React, { Component } from 'react';

import { Container, Title, RowHeader } from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Tags from '../../components/Tags';
import ContentMarketplace from '../../components/ContentMarketplace';
import { ScrollView } from 'react-native';

export default class Store extends Component {
  render() {
    return (
      <Container>
        <ScrollView>

          <RowHeader
            style={{
              justifyContent: 'space-between'
            }}
          >
            <Title>Mercado</Title>
            <FontAwesome name="search" size={20} color="#101010"
              style={{
                margin: 20,
                marginBottom: 0,
                padding: 10,
                backgroundColor: '#eee',
                borderRadius: 20
              }} />
          </RowHeader>
          <Tags
            tags={[{
              id: 1,
              tag: '',
              icon: 'user'
            }, {
              id: 2,
              tag: 'Vender'
            }, {
              id: 3,
              tag: 'Veículos',
            }, {
              id: 4,
              tag: 'Arrendamentos'
            }, {
              id: 5,
              tag: 'Mais'
            }]}
          />
          <ContentMarketplace />
        </ScrollView>
      </Container>
    );
  }
}
