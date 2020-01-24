import React, { Component } from 'react';

import { Container, Banner } from './styles';

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Banner
          imageStyle={{
            borderRadius: 20
          }}
          style={{
            backgroundColor: '#e4edf2'
          }}
        >

        </Banner>
      </Container>
    );
  }
}
