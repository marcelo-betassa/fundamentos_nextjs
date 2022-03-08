import React from 'react'

const Cabecalho = (props) => {
    
    // props é somente leitura
    console.log(props);

    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}

export default Cabecalho;