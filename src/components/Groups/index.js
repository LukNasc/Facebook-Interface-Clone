import React, { Component } from 'react';

import { FlatList } from 'react-native';

import { Container, BoxGroup, ImageGroup, NameGroup } from './styles';

export default class Groups extends Component {
    state = {
        data: [{
            id: 1,
            image: 'https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/11/formacao_1600x1200-como-podemos-fortalecer-o-amor-na-familia.jpg',
            name: 'Grupo da\n Familia'
        },
        {
            id: 2,
            image: 'https://i.zst.com.br/images/as-5-melhores-bolas-de-futebol-para-comprar-em-2019-photo733682881-44-25-30.jpg',
            name: 'Futebol'
        },
        {
            id: 3,
            image: 'https://www.revistamda.com/wp-content/uploads/2016/02/maos-dadas-mda-770x470.jpg',
            name: 'Terço das quinta \n feira'
        },
        {
            id: 4,
            image: 'http://hubpme.com.br/wp-content/uploads/2018/08/mercado-online.jpg',
            name: 'Mercadinho \ndo Face'
        },
        {
            id: 5,
            image: 'https://abrilvejasp.files.wordpress.com/2019/11/img_3240-hdr.jpg.jpg',
            name: 'Barzinho \ndo sábado'
        },
        {
            id: 6,
            image: 'https://s3.portalt5.com.br/imagens/messy-bedroom-2.jpg?mtime=20180119202908',
            name: 'Casa da mãe\n Joana'
        }
        ]
    }

    render() {
        return (
            <Container>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <BoxGroup key={item.id} style={item.id === 1 ? { marginLeft: 20 } : {}}>
                            <ImageGroup
                                style={{
                                    borderColor: '#ccc',
                                    borderWidth: 1,
                                    borderRadius: 10
                                }}
                                source={{ uri: item.image }} />
                            <NameGroup>
                                {item.name}
                            </NameGroup>
                        </BoxGroup>
                    )}
                />
            </Container>
        );
    }
}
