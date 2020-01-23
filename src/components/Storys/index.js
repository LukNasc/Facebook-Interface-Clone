import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { Container, BoxStory, Description, Image } from './styles';


import Profile from '../../assets/profile.png'
export default class Storys extends Component {
    state = {
        data: [{
            id: 1,
            profile: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7s818WCafFEXmF7hEz1WVPKD_OKJp9WzC0_OMY9NdRjmxZheZTA&s',
            description: 'Add to story',
            image: Profile
        },
        {
            id: 2,
            profile: 'https://i.pinimg.com/originals/a2/93/75/a293751588eefe40263cab4847e88452.jpg',
            description: 'José Carlos',
            image: 'https://gd-paris.sfo2.cdn.digitaloceanspaces.com/2016/04/Paris.jpg'

        }, {
            id: 3,
            profile: 'https://cdn.dicionariopopular.com/imagens/penteado-make-tumblr-cke.jpg',
            description: 'Mariana Silva',
            image: 'http://www.belta.org.br/wp-content/uploads/GoEuropa-LIVE-A-Medieval-Rotemburgo-na-Alemanha-810x430.jpg'

        },
        {
            id: 4,
            profile: 'https://i.pinimg.com/originals/4d/24/eb/4d24eb25496834427099ba496d948c64.jpg',
            description: 'Rebeca Andrade',
            image: 'https://i0.wp.com/www.eurodicas.com.br/wp-content/uploads/2017/09/tudo-sobre-espanha.jpg?resize=780%2C470&ssl=1'

        },
        {
            id: 5,
            profile: 'https://i.pinimg.com/originals/f0/3b/39/f03b39d2be0e46ab619c988eca4258d6.jpg',
            description: 'Lucas Rafael',
            image: 'https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0RG000000i1UINMA2/5c363ea4e4b04b23f5167fb5.jpg&w=710&h=462'

        },
        {
            id: 6,
            profile: 'https://1.bp.blogspot.com/--pOBe6fVjhE/WYH3E5q-q-I/AAAAAAAAGcw/n03_p1G9lB4h4l_HvR7p8h3FQWwe6-l3wCLcBGAs/s1600/como-tirar-fotos-tumblr-masculinas.jpg3.jpg',
            description: 'Matheus Souza',
            image: 'https://abrilviagemeturismo.files.wordpress.com/2016/10/3813251424_287d325978_o.jpeg?quality=70&strip=info&w=925'

        }]
    }
    render() {
        return (
            <Container>
                <FlatList
                    data={this.state.data}
                    keyExtractor={(key) => { key.id }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <BoxStory
                            key={item.key}
                            source={item.id === 1 ? item.image : { uri: item.image }}
                            imageStyle={{ borderRadius: 15, borderColor: '#ccc', borderWidth: 1 }}
                        >
                            <Image source={{ uri: item.profile }} style={
                                item.id === 1 ? { borderWidth: 1,borderColor: '#ccc', backgroundColor: '#fff' } : { borderColor: 'blue' }
                            } />
                            <Description>{item.description}</Description>
                        </BoxStory>
                    )}
                />
            </Container>
        );
    }
}
