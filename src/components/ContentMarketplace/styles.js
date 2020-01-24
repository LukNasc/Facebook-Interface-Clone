import styled from 'styled-components/native';

export const Container = styled.View`
    margin-top: 10px;
    border-top-color: #ccc;
    border-top-width: 1px;
    padding-bottom: 20px;
`;

export const Padding = styled.View`
    padding: 0 20px 0 20px;
`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 20px;
    margin-top: 10px;
`;
export const ContentBox = styled.View`
    flex:1;
    margin-top: 10px;
`;
export const Row = styled.View`flex-direction: row;`;
export const Collumn = styled.View`flex-direction: column;`;
export const Description = styled.Text`
    font-weight: bold;
    margin-left: 10px;
    margin-right: 10px;
`;
export const Location = styled.Text`
    font-size:15px;
    color: #ccc;
    margin-left: 10px;
    margin-right: 10px;
`;

export const Image = styled.Image`
    flex: 1;
    height: 200px;
`;