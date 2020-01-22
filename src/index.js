import React from 'react';

import { Container } from './styles.js'

import Toolbar from './components/Toolbar'
import Routes from './routes';

const App = () => {
    return (
        <Container>
            <Toolbar />
            <Routes />
        </Container>
    );
};

export default App;
