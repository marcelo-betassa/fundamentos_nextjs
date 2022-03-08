
import React, { useState } from 'react'
import Layout from '../components/Layout'

function integracao() {

    // const url =`http://localhost:3000/api/clientes/${codigo}`;
    const [codigo, setCodigo] = useState(1);
    const [cliente, setCliente] = useState({});

    async function getCliente() {
        const res = await fetch(`http://localhost:3000/api/clientes/${codigo}`);
        const dados = await res.json();
        setCliente(dados);
            // fetch(url).then(resp => resp.json())
                // .then(result => setCliente(result));
    }    

    return (
        <Layout titulo="Teste integração">

            <div>
                <input type="number" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                <button onClick={getCliente}>obterCliente</button>
            </div>

            <ul>
                <li>Codigo: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>E-mail: {cliente.email}</li>
            </ul>
        </Layout>
    )
}

export default integracao;