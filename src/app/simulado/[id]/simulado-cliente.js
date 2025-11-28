"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "../page.module.css";

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
      <>
        <h1>Resultado do simulado: {simulado?.title}</h1>
        <div>
          {respostas.map((r, i) => (
            <div key={i}>
              {`ID questão: ${r.id} - Resposta: ${
                getQuestao(r.id).alternativas[r.resposta]
              } (${r.acertou ? "Acertou" : "Errou"})`}
            </div>
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <h1>Pagina do simulado: {simulado?.title}</h1>
      {questao && (
        <div>
          <h2>
            {questaoAtual} - {questao.enunciado}
          </h2>
          <ol>
            {questao.alternativas.map((alt, i) => (
              <li key={i}>
                <span
                  className={selecionada == i ? styles.marcada : ""}
                  onClick={() => responder(questoes[questaoAtual], i)}
                >
                  {alt}
                </span>
              </li>
            ))}
          </ol>
          <div style={{ marginTop: "1rem" }}>
            <button
              disabled={questaoAtual <= 0}
              onClick={() => tratarAnterior()}
            >
              Anterior
            </button>
            <button
              style={{ marginLeft: "0.5rem" }}
              disabled={questaoAtual >= questoes.length - 1}
              onClick={() => tratarProxima()}
            >
              Próxima
            </button>
            <button
              style={{ marginLeft: "0.5rem" }}
              hidden={respostas.length < questoes.length}
              onClick={() => mostrarResultado()}
            >
              Mostrar resultado
            </button>
          </div>
        </div>
      )}
    </>
  );
}

