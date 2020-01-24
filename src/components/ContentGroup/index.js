import React, { Component } from 'react';

import { FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

import ButtonActionPost from '../ButtonActionsPost'
import { Container, BoxPost, RowHeaderPost, ImageProfile, Text, Bold, CollumnHeaderPost, ImagePost, TextPadding, BoxShare } from './styles';

export default class ContentGroup extends Component {
    state = {
        data: [{
            id: 1,
            user: {
                name: 'Lucas Nascimento',
                profile: 'https://avatars2.githubusercontent.com/u/26725196?s=460&v=4'
            },
            post: {
                description: 'iPhone 8 plus por apenas R$ 2.100,00',
                image: 'https://http2.mlstatic.com/iphone-8-plus-256gb-D_NQ_NP_801968-MLB31256284548_062019-F.jpg',
                isShare: false,
                horario: 'Agora Mesmo'
            },
            group: {
                id: 1,
                name: 'Mercadinho do Face',
            }
        }, {
            id: 2,
            user: {
                name: 'Jiselle Martins',
                profile: 'https://avatars1.githubusercontent.com/u/27255672?s=460&v=4'
            },
            post: {
                description: 'Aproveite cada dia para viver a vida que você escolheu e nunca a vida que os outros querem que você viva. Bom dia! ',
                image: '',
                isShare: false,
                horario: 'Agora Mesmo'
            },
            group: {
                id: 2,
                name: 'Grupo da Família',
            }
        }, {
            id: 3,
            user: {
                name: 'Rebeca Andrade',
                profile: 'https://i.pinimg.com/originals/4d/24/eb/4d24eb25496834427099ba496d948c64.jpg'
            },
            post: {
                description: '',
                image: '',
                isShare: true,
                horario: 'Agora Mesmo'
            },
            group: {
                id: 3,
                name: 'Terço das quinta feira',
            },
            postShare: {
                user: {
                    name: 'Marcos Alcântara',
                    profile: 'https://mhmcdn.ynvolve.net/?w=750&h=450&quality=90&clipping=landscape&url=//manualdohomemmoderno.com.br/files/2013/08/Tumblr-mostra-fotos-com-o-antes-e-depois-das-pessoas-10.jpg&format=webp&hash=e656107dbc724ef044fb81692484e301df8e6a7b86ec629a01e63499464e0791',
                },
                post: {
                    hour: '9 hrs',
                    date: '23/01/2020',
                    subtitles: 'Grupo de jovens hoje foi muito bom',
                    image: 'https://www.unicef.org/brazil/sites/unicef.org.brazil/files/styles/large/public/br_adolescentes_mesquita_tre_rj.jpg?itok=N_VxS208',
                    likes: 18,
                    comments: 123,
                    share: 237
                }
            }
        }, {
            id: 4,
            user: {
                name: 'José Carlos',
                profile: 'https://i.pinimg.com/originals/a2/93/75/a293751588eefe40263cab4847e88452.jpg'
            },
            post: {
                description: 'Não deixe para amanhã a cerveja que você pode beber hoje!!!',
                image: '',
                isShare: false,
                horario: 'Agora Mesmo'
            },
            group: {
                id: 1,
                name: 'Barzinho do sábado',
            }
        }, {
            id: 5,
            user: {
                name: 'Mariana Silva',
                profile: 'https://cdn.dicionariopopular.com/imagens/penteado-make-tumblr-cke.jpg'
            },
            post: {
                description: 'Festa hoje aqui, quem vem???',
                image: '',
                isShare: false,
                horario: 'Agora Mesmo'
            },
            group: {
                id: 5,
                name: 'Casa da mãe Joana',
            }
        },]
    }
    render() {
        return (
            <Container>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <BoxPost>
                            <TextPadding>
                                <RowHeaderPost
                                    style={{ flex: 1 }}
                                >
                                    <RowHeaderPost>
                                        <ImageProfile source={{ uri: item.user.profile }} />
                                        <RowHeaderPost>
                                            <CollumnHeaderPost>
                                                <Text><Bold>{item.user.name}   </Bold></Text>
                                                <Text>Agora Mesmo</Text>
                                            </CollumnHeaderPost>
                                            <FontAwesome name="caret-right" size={20} color="#ccc" />
                                            <Text><Bold>   {item.group.name}</Bold></Text>
                                        </RowHeaderPost>
                                    </RowHeaderPost>
                                </RowHeaderPost>
                            </TextPadding>
                            {
                                item.post.isShare ? (
                                    <BoxShare>
                                        <TextPadding>
                                            <RowHeaderPost>
                                                <ImageProfile source={{ uri: item.postShare.user.profile }} />
                                                <RowHeaderPost>
                                                    <CollumnHeaderPost>
                                                        <Text><Bold>{item.postShare.user.name}</Bold></Text>
                                                        <Text>{item.postShare.post.hour}</Text>
                                                    </CollumnHeaderPost>
                                                </RowHeaderPost>
                                            </RowHeaderPost>
                                        </TextPadding>
                                        <TextPadding>
                                            <Text
                                                style={{
                                                    margin: 10
                                                }}
                                            >{item.postShare.post.subtitles}</Text>
                                        </TextPadding>
                                    </BoxShare>
                                ) : (null)
                            }
                            <CollumnHeaderPost
                                style={{
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}
                            >
                                <TextPadding>
                                    <Text
                                        style={!item.post.image ? {
                                            width: '100%',
                                            margin: 10,
                                            fontSize: 25
                                        } : {
                                                width: '100%',
                                                margin: 10,
                                                fontSize: 15
                                            }}
                                    >
                                        {item.post.description}
                                    </Text>
                                </TextPadding>
                                {
                                    item.post.isShare && item.postShare.post.image ? (
                                        <ImagePost source={{ uri: item.postShare.post.image }} style={{ marginTop: -65 }} />
                                    ) : item.post.image ? (<ImagePost source={{ uri: item.post.image }} />) : (null)
                                }
                            </CollumnHeaderPost>
                            <RowHeaderPost>
                                <ButtonActionPost
                                    text="Curtir"
                                    icon="thumbs-up"
                                />
                                <ButtonActionPost
                                    text="Comentar"
                                    icon="comment"
                                />
                                <ButtonActionPost
                                    text="Compartilhar"
                                    icon="share"
                                />
                            </RowHeaderPost>
                        </BoxPost>
                    )}
                />
            </Container>
        );
    }
}
