"use client";

import React from 'react';
import { useState } from 'react';

const Accordion = ({ titulo, itens, className }) => {

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
            <ul>
                {itens.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>}
    </div>
    );
};

export default Accordion;
