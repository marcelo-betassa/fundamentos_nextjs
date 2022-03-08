import styles from '../styles/Estiloso.module.css';
import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';


const Estiloso = (props) => {
  return (
    <Layout titulo="Teste cabeçalho">
      <div className={styles.roxo}>
          <h1>Estilo usando CSS Módulos</h1>
      </div>
    </Layout>
  )
}

export default Estiloso;