import React from 'react';
import Header from '../components/header';
import Container from '../components/container';

function OtherComponent() {
    // Este es otro componente que aparecerá antes del contenido de Home
    return (
        <div>
            <p></p>
        </div>
    );
}

function Home() {
    return (
        <div>
            <Header />
            <OtherComponent />
            <Container />
        </div>
    );
}

export default Home;
