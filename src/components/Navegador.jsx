import styles from "../styles/Navegador.module.css";
import Link from "next/link";
import React from 'react';

const Navegador = (props) => {
    return (
        <div>
            <Link href={props.destino}>
                <div className={styles.navegador} style={{
                    backgroundColor: props.cor ?? '#1e90ff'
                }}>    
                    {props.texto}
                </div>
            </Link>
        </div>
    )
}

export default Navegador