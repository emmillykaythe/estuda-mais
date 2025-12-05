import db from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result = await db.query('SELECT * FROM material')
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('Erro listando materiais:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { nome, link, tipo, conteudo_id } = await request.json();

    if (!conteudo_id) {
      return NextResponse.json({ error: "conteudo_id é obrigatório" }, { status: 400 });
    }

    const tipoMap = {
      videos: 1,
      resumo: 2,
      lista: 3,
    };

    const idtipo = tipoMap[tipo];

    if (!idtipo) {
      return NextResponse.json({ error: "Tipo inválido" }, { status: 400 });
    }

    const result = await db.query(
      'INSERT INTO material (descricao, link, idconteudo, idtipo) VALUES ($1, $2, $3, $4) RETURNING *',
      [nome, link, conteudo_id, idtipo]
    );

    return NextResponse.json(result.rows[0], { status: 201 });

  } catch (error) {
    console.error("Erro ao inserir material:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}