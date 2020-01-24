import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import { Container, Title } from './styles';

import Tags from '../../components/Tags';
import Groups from '../../components/Groups';
import ContentGroup from '../../components/ContentGroup';
import { RowHeaderPost } from '../../components/ContentGroup/styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

export default class Group extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <RowHeaderPost style={{
            justifyContent: "space-between"
          }}>
            <Title>
              Grupos
           </Title>
            <FontAwesome name="search" size={20} color="#101010"
              style={{
                margin: 20,
                marginBottom: 0,
                backgroundColor: '#eee',
                padding: 10,
                borderRadius: 200
              }}
            />
          </RowHeaderPost>
          <Tags tags={[{
            id: 1,
            tag: 'Seus Grupos',
            icon: 'users'
          }, {
            id: 2,
            tag: 'Descoberta',
            icon: 'compass'
          }, {
            id: 3,
            tag: 'Criar',
            icon: 'plus'
          }, {
            id: 4,
            tag: 'Configurações',
            icon: 'cog'
          }]} />
          <Groups />
          <ContentGroup />
        </ScrollView>
      </Container>
    );
  }
}
