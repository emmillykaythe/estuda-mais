import db from "@/lib/db";
import SimuladoClient from "./simulado-client";

export default async function SimuladoPage({ params }) {
  const { id } = params; 

  const simulados = await db.query("SELECT * FROM simulados WHERE id = $1", [
    id]
  );

  const questoesRes = await db.query("SELECT * FROM questoes WHERE simulado_id = $1",[
    id]
  );

  const questoes = [];

  for (let i = 0; i < questoesRes.rows.length; i++) {
    let questao = questoesRes.rows[i];

    questoes.push({
      id: questao.id,
      enunciado: questao.enunciado,
      correta: questao.correta,
      alternativas: [
        questao.alternativa1,
        questao.alternativa2,
        questao.alternativa3,
        questao.alternativa4,
      ],
    });
  }
  
  const simulado = simulados.rows[0];
  return (
    <SimuladoClient simulado={simulado} questoes={questoes} simuladoId={id} />
  );
}