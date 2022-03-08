import Layout from '../components/Layout';
import React from 'react';
import Cabecalho from '../components/Cabecalho';

    const exemplo = () => {
    return (
        <Layout titulo="Usando componentes">
            <Cabecalho titulo="Next.js & React"/>
            <Cabecalho titulo="Aprenda Next.js na prática!"/>
        </Layout> 
        
    )
}

export default exemplo