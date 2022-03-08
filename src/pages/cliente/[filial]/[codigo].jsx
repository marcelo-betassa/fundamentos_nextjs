import React from 'react';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';

const clientePorCodigo = (props) => {

    const router = useRouter();

    console.log('router#', router);

    return (
        <Layout titulo="Navegação Dinâmica">
            <div>
                <div>Código Cliente: {router.query.codigo}</div>
                <div>Código Filial: {router.query.filial}</div>
            </div>
        </Layout>
    )
}


export default clientePorCodigo;