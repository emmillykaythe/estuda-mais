import { getSimulados, insertSimulado } from '@/lib/simuladoRepository'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const result = await getSimulados();
    console.log(result);
    return NextResponse.json(result)
  } catch (error) {
    console.error('Erro listando simulados:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request) {
  try {
    const { titulo, descricao } = await request.json();

   
    const result = await insertSimulado(titulo, descricao);

    return NextResponse.json(result, { status: 201 });

  } catch (error) {
    console.error("Erro ao inserir material:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}