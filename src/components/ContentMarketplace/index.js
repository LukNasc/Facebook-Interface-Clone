import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Container, Padding, Title, Row, Image, ContentBox, Description, Location, Collumn } from './styles';

export default class ContentMarketplace extends Component {
    state = {
        data: [{
            id: 1,
            image: 'http://i.classificadosmil.com.br/i-a/xhOM-1.jpg',
            location: 'Fortaleza - CE',
            description: 'Geladeira seminova R$150,00'
        },
        {
            id: 2,
            image: 'https://img.olx.com.br/images/14/140906030029658.jpg',
            location: 'Fortaleza - CE',
            description: 'Mais informações no privado'
        },
        {
            id: 3,
            image: 'https://img.olx.com.br/images/51/512912081557434.jpg',
            location: 'Curitiba - PR',
            description: 'Tênis Fila - R$ 350,00'
        },
        {
            id: 4,
            image: 'https://oimparcial.com.br/app/uploads/2019/07/t.jpg',
            location: 'Fortaleza - CE',
            description: 'Filhotes para adoção'
        },
        {
            id: 5,
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Kattenkorrels_op_dierenmarkt_Istanbul.JPG/1200px-Kattenkorrels_op_dierenmarkt_Istanbul.JPG',
            location: 'Fortaleza - CE',
            description: 'Ração para filhotes cães'
        },
        {
            id: 6,
            image: 'https://blog.passarela.com.br/wp-content/uploads/2018/01/floral-1.jpg',
            location: 'Campo Grande - MS',
            description: 'Roupas masculinas - R$ 20,00'
        },
        {
            id: 7,
            image: 'https://www.syma.com.br/media/catalog/product/cache/1/image/800x/9df78eab33525d08d6e5fb8d27136e95/n/o/notebook-samsung-expert-x40-intel-i5-8250u-branco_1_.jpg',
            location: 'Campo Grande - MS',
            description: 'Notebook Samsung X40 Branco - R$2.111,00'
        },
        {
            id: 8,
            image: 'https://brmotorola.vteximg.com.br/arquivos/ids/163175-700-700/Motorolaone-hyper-azul-oceano-1.png?v=637109043885630000',
            location: 'Campo Grande - MS',
            description: 'Motorla One Hyper - R$ 2.199,12'
        }
        ]
    }

    render() {
        return (

            <Container
            >
                <Padding>
                    <Title>Escolhas de hoje</Title>
                </Padding>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    ItemSeparatorComponent={() => <View style={{ width: 10, backgroundColor: 'red' }} />}
                    renderItem={({ item }) => (
                        <ContentBox
                            style={
                                item.id % 2 !== 0 ? {
                                    marginRight: 10
                                } : {}}
                        >
                            <Row key={item.id}>
                                <Image source={{ uri: item.image }} resizeMode="cover" />
                            </Row>
                            <Collumn>
                                <Description numberOfLines={2}>{item.description}</Description>
                                <Location>{item.location}</Location>
                            </Collumn>
                        </ContentBox>
                    )}
                />
            </Container>
        );
    }
}
