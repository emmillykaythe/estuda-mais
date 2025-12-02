
"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";

export default function SimuladoClient({ simulado, questoes, simuladoId }) {
  const params = useParams();
  const [finalizou, setFinalizou] = useState(false);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [selecionada, setSelecionada] = useState(-1);
  const [respostas, setRespostas] = useState([]);
  const questao = questoes[questaoAtual];

  const getQuestao = (id) => questoes.find((q) => q.id === id);
  const getResposta = (id) => respostas.find((r) => r.id === id);

  const tratarProxima = () => {
    const novo = Math.min(questaoAtual + 1, questoes.length - 1);
    const r = getResposta(questoes[novo].id);
    setSelecionada(r?.resposta ?? -1);
    setQuestaoAtual(novo);
  };

  const tratarAnterior = () => {
    const novo = Math.max(questaoAtual - 1, 0);
    const r = getResposta(questoes[novo].id);
    setSelecionada(r?.resposta ?? -1);
    setQuestaoAtual(novo);
  };

  const mostrarResultado = () => {
    setFinalizou(true);
  };

  const responder = (questao, resposta) => {
    let nova = {
      id: questao.id,
      resposta: resposta,
      acertou: resposta === questao.correta,
    };

    setRespostas((prev) => {
      const idx = prev.findIndex((r) => r.id === questao.id);
      if (idx >= 0) {
        const copia = [...prev];
        copia[idx] = nova;
        return copia;
      }
      return [...prev, nova];
    });

    setSelecionada(resposta);
  };

 
  if (finalizou) {
    return (
     <div className={styles.resultadoContainer}>
  <h1 className={styles.tituloResultado}>{simulado?.title}</h1>

  <div className={styles.resumoResultado}>
    <p>Total de questões: {questoes.length}</p>
    <p>Acertos: {respostas.filter((r) => r.acertou).length}</p>
    <p>Erros: {respostas.filter((r) => !r.acertou).length}</p>
  </div>

  <div className={styles.listagemResultados}>
    {respostas.map((r, i) => (
      <div
        key={i}
        className={`${styles.resultadoItem} ${
          r.acertou ? styles.certo : styles.errado
        }`}
      >
        <div className={styles.resultadoHeader}>
          <strong>Questão {i + 1}</strong>
          <span>{r.acertou ? "✔ Acertou" : "✘ Errou"}</span>
        </div>

        <p className={styles.minhaResposta}>
          Sua resposta: {getQuestao(r.id).alternativas[r.resposta]}
        </p>

        {!r.acertou && (
          <p className={styles.respostaCorreta}>
            Correta: {getQuestao(r.id).alternativas[getQuestao(r.id).correta]}
          </p>
        )}
      </div>
    ))}
  </div>
</div>
    );
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Questão</span>
          <span className={styles.numero}>
            {String(questaoAtual + 1).padStart(2, "0")}
          </span>
        </div>

        <h1 className={styles.titulo}>{simulado?.title}</h1>

        {questao && (
          <div className={styles.containerQuestao}>
            <p className={styles.enunciado}>{questao.enunciado}</p>

            <ul className={styles.listaAlternativas}>
              {questao.alternativas.map((alt, i) => (
                <li
                  key={i}
                  className={`${styles.alternativa} ${
                    selecionada === i ? styles.marcada : ""
                  }`}
                  onClick={() => responder(questao, i)}
                >
                  <div className={styles.letras}>
                    {String.fromCharCode(65 + i)}
                  </div>

                  <div className={styles.texto}>{alt}</div>
                </li>
              ))}
            </ul>

            <div className={styles.botoes}>
              <button disabled={questaoAtual <= 0} 
              onClick={tratarAnterior}>
                Anterior
              </button>

              <button
                disabled={questaoAtual >= questoes.length - 1}
                onClick={tratarProxima}
              >
                Próxima
              </button>

              <button
                hidden={respostas.length < questoes.length}
                onClick={mostrarResultado}
              >
                Resultado
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
