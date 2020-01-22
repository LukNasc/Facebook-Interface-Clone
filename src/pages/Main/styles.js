import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background: #fff;
`;

export const BoxStatus = styled.View`
    width: 100%;
    height: 80px;
    padding: 10px;
    font-family: 'Roboto';
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-color: #ccc;
    border-bottom-width: 1px;
    border-top-color: #ccc;
    border-top-width: 1px;
`;


export const ImageProfile = styled.Image`
    width: 40px;
    height: 40px;
    border-radius:20px;
    border: 1px solid #ccc;
    margin-right: 10px;
`;

export const FieldStatus = styled.TextInput`
    border: 1px solid #ccc;
    border-radius: 20px;
    height: 40px;
    font-size: 15px;
    padding: 10px;
    flex: 1;
`;

export const BoxMedias = styled.View`
    border-bottom-color: #ccc;
    border-bottom-width: 6px;
    flex-direction: row;
`;

