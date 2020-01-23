import styled from 'styled-components/native';

export const Container = styled.View`
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom-color: #aaa;
    border-bottom-width: 7px;
`;

export const BoxStory = styled.ImageBackground`
    padding: 10px;
    width: 120px;
    height: 200px;
    margin: 5px;
    flex-direction: column;
    justify-content: space-between;

`;

export const Description = styled.Text`
    font-size: 15px;
    font-weight: bold;
    color: #fff;
`;

export const Image = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
    border: 2px blue solid;
`
