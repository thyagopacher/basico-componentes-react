import React from 'react';

import Header from './components/Header';

/**
 * Conceitos principais para React 
 * Componente
 * Propriedade
 * Estado e Imutabilidade
 *  */
function App() {
    const projects = ['Desenvolvimento de app', 'Front-end web'];

    return (
        <>
            <Header title="Homepage">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                </ul>
            </Header>
            <Header title="Projects">
                <ul>
                    <li>Homepage</li>
                    <li>Projects</li>
                    <li>Login</li>
                </ul>
            </Header>
        </>
    );
}

export default App;