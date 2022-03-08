import styles from '../styles/Layout.module.css';
import Link from 'next/link';
import React from 'react';

const Layout = (props) => {

    console.log('props# => ', props);

    return (
        <div className={styles.layout}>
            <div className={styles.cabecalho}>
                <h1>{props.titulo ?? 'Mais um exemplo'}</h1>
                <Link href="/">
                    Voltar
                </Link>
            </div>
            <div className={styles.conteudo}>
            {props.children}
            </div>
        </div>
    )
}

export default Layout