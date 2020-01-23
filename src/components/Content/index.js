import React, { Component } from 'react';
import { FlatList } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5'

import {
    Container,
    Text,
    Subtitles,
    BoxPost,
    RowHeaderPost,
    CollumnHeaderPost,
    ImageProfile,
    Bold,
    ContentPost,
    ImagePost
} from './styles';

import ButtonActionsPost from '../ButtonActionsPost'
import LikesIcon from '../LikesIcon/'


export default class Content extends Component {
    state = {
        data: [{
            id: 1,
            user: {
                name: 'Lucas Nascimento',
                profile: 'https://avatars2.githubusercontent.com/u/26725196?s=460&v=4'
            },
            post: {
                hour: '9 hrs',
                date: '23/01/2020',
                subtitles: 'Sim, minha força está na solidão. Não tenho medo nem de chuvas tempestivas nem das grandes ventanias soltas, pois eu também sou o escuro da noite.',
                image: 'https://assets.2ser.com/wp-content/aws/uploads/2018/06/21185815/Mood-Evening-Sky-Moon-Moonlight-Full-Moon-1775765.jpg',
                likes: 14,
                comments: 30,
                share: 455
            }

        }, {
            id: 2,
            user: {
                name: 'Jiselle Martins',
                profile: 'https://avatars1.githubusercontent.com/u/27255672?s=460&v=4'
            },
            post: {
                hour: 'Agora mesmo',
                date: '23/01/2020',
                subtitles: 'Te liguei pra falar de ontem a noite moreeeenaaaaa....AMOOOOOO <3',
                image: 'https://avatars1.githubusercontent.com/u/27255672?s=460&v=4',
                likes: 20,
                comments: 56,
                share: 213
            }

        },
        {
            id: 3,
            user: {
                name: 'Rebeca Andrade',
                profile: 'https://i.pinimg.com/originals/4d/24/eb/4d24eb25496834427099ba496d948c64.jpg'
            },
            post: {
                hour: '9 hrs',
                date: '23/01/2020',
                subtitles: 'Há noites que eu não posso dormir de remorso por tudo o que eu deixei de cometer.',
                image: '',
                likes: 18,
                comments: 123,
                share: 237
            }

        },
        {
            id: 4,
            user: {
                name: 'Paulo Iury',
                profile: 'https://avatars1.githubusercontent.com/u/27500522?s=400&v=4'
            },
            post: {
                hour: '9 hrs',
                date: '23/01/2020',
                subtitles: 'O Rio de Janeiro é uma grande selva urbana. Uns na pedra lascada, outros na polida, a maioria no capitalismo selvagem, todos na anomalia do inconsciente.',
                image: 'https://prosaempoema.files.wordpress.com/2010/01/pc3a3o-de-ac3a7c3bacar_rio-de-janeiro.jpg',
                likes: 243,
                comments: 321,
                share: 1
            }

        },
        {
            id: 5,
            user: {
                name: 'José Carlos',
                profile: 'https://i.pinimg.com/originals/a2/93/75/a293751588eefe40263cab4847e88452.jpg'
            },
            post: {
                hour: '9 hrs',
                date: '23/01/2020',
                subtitles: 'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
                image: undefined,
                likes: 32,
                comments: 34,
                share: 4
            }

        },
        {
            id: 6,
            user: {
                name: 'Mariana Silva',
                profile: 'https://cdn.dicionariopopular.com/imagens/penteado-make-tumblr-cke.jpg'
            },
            post: {
                hour: '9 hrs',
                date: '23/01/2020',
                subtitles: 'A verdadeira amizade é aquela que nos permite falar, ao amigo, de todos os seus defeitos e de todas as nossas qualidades.',
                image: 'https://i.pinimg.com/originals/04/52/bd/0452bd997362d1cab9db119de38631fb.jpg',
                likes: 500,
                comments: 100,
                share: 3
            }

        },]
    }

    render() {
        return (
            <Container>
                <FlatList
                    data={this.state.data}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <BoxPost>
                            <RowHeaderPost
                                style={{
                                    justifyContent: 'space-between'
                                }}
                            >
                                <RowHeaderPost>
                                    <ImageProfile source={{ uri: item.user.profile }} />
                                    <CollumnHeaderPost>
                                        <Text>
                                            <Bold>{item.user.name}</Bold>
                                        </Text>
                                        <Text>{item.post.hour}</Text>
                                    </CollumnHeaderPost>
                                </RowHeaderPost>
                                <FontAwesome
                                    name="ellipsis-h"
                                    size={20}
                                    color="grey"
                                />
                            </RowHeaderPost>
                            <ContentPost>
                                <Subtitles
                                    style={
                                        !item.post.image ?
                                            { fontSize: 25 }
                                            :
                                            { fontSize: 15 }
                                    }
                                >
                                    {item.post.subtitles}
                                </Subtitles>
                                {item.post.image ? (<ImagePost source={{ uri: item.post.image }} />) : (null)}
                            </ContentPost>
                            <RowHeaderPost
                                style={{
                                    height: 40,
                                    justifyContent: 'space-between',
                                    alignItems: 'center'
                                }}
                            >
                                <LikesIcon />
                                <Text style={{ flex: 1 }}>
                                    Lucas e {item.post.likes} outras pessoas
                                    </Text>

                                <Text>
                                    {item.post.comments} comentários
                                </Text>
                            </RowHeaderPost>
                            <RowHeaderPost
                                style={{
                                    borderTopColor: '#ccc',
                                    borderTopWidth: 1
                                }}
                            >
                                <ButtonActionsPost
                                    text="Curtir"
                                    icon="thumbs-up"
                                />
                                <ButtonActionsPost
                                    text="Comentar"
                                    icon="comment"
                                />
                                <ButtonActionsPost
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

