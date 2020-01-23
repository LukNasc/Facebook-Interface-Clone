import React, { Component } from 'react';

import { Container, Title } from './styles';
import Tags from '../../components/Tags';
import Groups from '../../components/Groups';

export default class Group extends Component {
  render() {
    return (
      <Container>
        <Title>
          Grupos
        </Title>
        <Tags />
        <Groups />
      </Container>
    );
  }
}
