"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import styles from "./page.module.css";
import CronometroSidebar from "@components/CronometroSidebar";
import Link from "next/link";


export default function SimuladoClient({ simulado, questoes, simuladoId }) {
  const params = useParams();
  const [finalizou, setFinalizou] = useState(false);
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [selecionada, setSelecionada] = useState(-1);
  const [respostas, setRespostas] = useState([]);
  const questao = questoes[questaoAtual];

  const getQuestao = (id) => questoes.find((q) => q.id === id);
  const getResposta = (id) => respostas.find((r) => r.id === id);

  const isValidHttpUrl = (urlString) => {
    try {
      const url = new URL(urlString);
      return url.protocol === "http:" || url.protocol === "https:";
    } catch (error) {
      return false;
    }
  };
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
    acertou: resposta === (questao.correta - 1),
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
                  Correta:{" "}
                  {getQuestao(r.id).alternativas[getQuestao(r.id).correta - 1]}
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
      <CronometroSidebar />
      <div style={{ marginLeft: "18vw" }}>
        <div className={styles.page}>
          <Link href="/simulados"> <img src="/voltar.png" width={24} height={24} alt="Voltar" className={styles.buttonVoltar}/></Link>
        </div>
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
              <div className={styles.enunciado}>
                {questao.enunciado
                  .replace("\r", "")
                  .split("\n")
                  .map((q, i) => (
                    <p className={styles.paragrafo} key={i}>
                      {q}
                    </p>
                  ))}
              </div>

              {/* Mostrar imagem do enunciado num <div><img/></div> se questao.img_enunciado != null */}

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

                    <div className={styles.texto}>
                      {isValidHttpUrl(alt) ? "Criar a imagem" : alt}
                    </div>
                  </li>
                ))}
              </ul>

              <div className={styles.botoes}>
                <button disabled={questaoAtual <= 0} onClick={tratarAnterior}>
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
      </div>
    </>
  );
}