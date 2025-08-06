"use client";

import React from 'react';
import { useState } from 'react';
import styles from './accordion.module.css';


const Accordion = ({ titulo, itens, className, icone }) => {

    const [exibirLista, setExibirLista] = useState(false);

    const alternarVisibilidade = () => {
        setExibirLista(!exibirLista);
    }

    return (
    <div>
        <div className={className} onClick={alternarVisibilidade}>
            <p>{titulo}</p>
        </div>
        {exibirLista && <div>
            <div className={styles.accordionContainer}>
                {itens.map((item, index) => (
            <div key={index} className={styles.accordionItem}> {item} </div>

                ))}
            </div>
        </div>}
    </div>
    );
};

export default Accordion;
